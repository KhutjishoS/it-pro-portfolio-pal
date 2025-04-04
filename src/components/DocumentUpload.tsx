
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  FileImage, 
  FileAudio, 
  FileArchive, 
  File, 
  FileVideo,
  Eye,
  Trash2,
  X
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Document = {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadDate: Date;
  url: string; // We'll use object URLs for this demo
};

const DocumentUpload = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulate progress for demo purposes
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isUploading) {
      interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    } else {
      setUploadProgress(0);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isUploading]);

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf') || fileType.includes('word') || fileType.includes('document')) {
      return <FileText className="text-blue-500" />;
    } else if (fileType.includes('image')) {
      return <FileImage className="text-green-500" />;
    } else if (fileType.includes('audio')) {
      return <FileAudio className="text-purple-500" />;
    } else if (fileType.includes('video')) {
      return <FileVideo className="text-red-500" />;
    } else if (fileType.includes('zip') || fileType.includes('archive')) {
      return <FileArchive className="text-amber-500" />;
    }
    return <File className="text-gray-500" />;
  };

  const getFileTypeLabel = (fileType: string) => {
    if (fileType.includes('pdf')) return 'PDF';
    if (fileType.includes('word') || fileType.includes('doc')) return 'DOCX';
    if (fileType.includes('sheet') || fileType.includes('excel') || fileType.includes('xls')) return 'XLSX';
    if (fileType.includes('presentation') || fileType.includes('ppt')) return 'PPT';
    if (fileType.includes('image/png')) return 'PNG';
    if (fileType.includes('image/jpeg') || fileType.includes('image/jpg')) return 'JPG';
    if (fileType.includes('image')) return 'IMG';
    if (fileType.includes('audio')) return 'AUDIO';
    if (fileType.includes('video')) return 'VIDEO';
    if (fileType.includes('zip') || fileType.includes('archive')) return 'ZIP';
    return 'FILE';
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    setIsUploading(true);
    
    // Process each uploaded file
    const files = Array.from(event.target.files);
    processFiles(files);
  };
  
  const processFiles = (files: File[]) => {
    setIsUploading(true);
    
    setTimeout(() => {
      const newDocuments = files.map(file => {
        // Generate a URL for the file (in a real app, you'd upload to a server)
        const url = URL.createObjectURL(file);
        
        // Format the file size
        const sizeInKB = file.size / 1024;
        const sizeText = sizeInKB < 1024
          ? `${sizeInKB.toFixed(1)} KB`
          : `${(sizeInKB / 1024).toFixed(1)} MB`;
          
        return {
          id: `doc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: file.name,
          size: sizeText,
          type: file.type,
          uploadDate: new Date(),
          url: url
        };
      });
      
      setDocuments(prev => [...prev, ...newDocuments]);
      setIsUploading(false);
      setUploadProgress(0);
      
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 2000); // Simulate network delay
  };
  
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleRemoveDocument = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };
  
  const handleOpenDocument = (url: string) => {
    window.open(url, '_blank');
  };

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div className="container mx-auto py-16" id="documents">
      <h2 className="section-heading">My Documents</h2>
      
      <div className="mt-8">
        <Card className="w-full border border-border shadow-md overflow-hidden">
          <CardHeader className="bg-secondary/40">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Document Repository
            </CardTitle>
            <CardDescription>
              Share your professional documents, certifications, and portfolio materials
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div 
              className={`border-dashed border-2 rounded-lg p-8 text-center transition-all ${
                dragActive 
                  ? "border-primary bg-primary/10" 
                  : "hover:bg-muted/50 border-border"
              }`}
              onClick={handleUploadClick}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg font-medium mb-1">Drag files here or click to upload</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Upload your resume, certificates, project documentation, or any other professional materials
                </p>
                <Input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.mp3,.wav,.mp4,.zip,.rar"
                />
              </div>
            </div>
            
            {isUploading && (
              <div className="mt-6 p-4 bg-secondary/40 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Uploading documents...</span>
                  <span className="text-sm font-medium">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
            
            {documents.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Your Documents</h3>
                  <Badge variant="outline" className="px-2 py-1">
                    {documents.length} {documents.length === 1 ? 'document' : 'documents'}
                  </Badge>
                </div>
                <div className="space-y-3 max-h-[400px] overflow-auto pr-2">
                  {documents.map((doc) => (
                    <div 
                      key={doc.id} 
                      className="flex items-center p-3 bg-card rounded-md border border-border hover:bg-secondary/20 transition-colors"
                    >
                      <div className="mr-3 flex-shrink-0">
                        {getFileIcon(doc.type)}
                      </div>
                      <div className="flex-1 mr-2 overflow-hidden">
                        <p className="font-medium truncate">{doc.name}</p>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <Badge variant="secondary" className="mr-2 text-xs font-normal">
                            {getFileTypeLabel(doc.type)}
                          </Badge>
                          <span className="mr-2">{doc.size}</span>
                          <span>•</span>
                          <span className="ml-2">{doc.uploadDate.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleOpenDocument(doc.url)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View document</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleRemoveDocument(doc.id)}
                                className="text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Remove document</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between bg-secondary/20 py-3">
            <p className="text-sm text-muted-foreground">
              Supported file types: PDF, Word, Excel, PowerPoint, Images, Audio, Video, Archives
            </p>
            <Button 
              variant="outline" 
              onClick={handleUploadClick}
              className="flex items-center"
              disabled={isUploading}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DocumentUpload;
