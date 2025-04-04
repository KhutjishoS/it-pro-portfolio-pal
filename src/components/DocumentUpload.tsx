
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    setIsUploading(true);
    
    // Process each uploaded file
    const files = Array.from(event.target.files);
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
    
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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

  return (
    <div className="container mx-auto py-16" id="documents">
      <h2 className="section-heading">My Documents</h2>
      
      <div className="mt-8">
        <Card className="w-full border border-border shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Upload Documents</CardTitle>
            <CardDescription>
              Share your resume, certificates, or project documentation
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div 
              className="border-dashed border-2 rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={handleUploadClick}
            >
              <Upload className="w-12 h-12 mx-auto mb-2 text-primary" />
              <p className="text-lg font-medium mb-2">Drag files here or click to upload</p>
              <p className="text-sm text-muted-foreground">
                Support for PDF, Word, Excel, PowerPoint, and image files
              </p>
              <Input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png"
              />
            </div>
            
            {isUploading && (
              <div className="mt-4 p-4 bg-primary/10 rounded-md">
                <p className="text-center">Uploading documents...</p>
              </div>
            )}
            
            {documents.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Your Documents</h3>
                <div className="space-y-3 max-h-[400px] overflow-auto pr-2">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-card rounded-md border border-border hover:bg-secondary/50 transition-colors">
                      <div className="flex-1 mr-2 overflow-hidden">
                        <p className="font-medium truncate">{doc.name}</p>
                        <div className="flex mt-1 text-xs text-muted-foreground">
                          <span>{doc.size}</span>
                          <span className="mx-2">•</span>
                          <span>{doc.uploadDate.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          onClick={() => handleOpenDocument(doc.url)}
                        >
                          Open
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRemoveDocument(doc.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              {documents.length} document{documents.length !== 1 ? 's' : ''} uploaded
            </p>
            <Button 
              variant="outline" 
              onClick={handleUploadClick}
              className="flex items-center"
            >
              <Upload className="w-4 h-4 mr-2" />
              Add More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DocumentUpload;
