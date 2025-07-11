import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAds } from '@/contexts/AdsContext';
import { useTheme } from '@/contexts/ThemeContext';

// Use an absolute URL for the worker from CDN to ensure compatibility with the latest version
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [directPdfUrl, setDirectPdfUrl] = useState<string | null>(null);
  const { showInterstitial } = useAds();
  const { theme } = useTheme();

  // Convert Google Drive view URL to direct download URL
  useEffect(() => {
    if (pdfUrl && pdfUrl.includes('drive.google.com/file/d/')) {
      const fileId = pdfUrl.split('/d/')[1].split('/')[0];
      setDirectPdfUrl(`https://drive.google.com/uc?export=download&id=${fileId}`);
    } else {
      setDirectPdfUrl(pdfUrl);
    }
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setError(true);
    setLoading(false);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return numPages ? Math.min(Math.max(1, newPageNumber), numPages) : 1;
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const zoomIn = () => setScale(prevScale => Math.min(prevScale + 0.2, 2.5));
  const zoomOut = () => setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  const rotate = () => setRotation(prevRotation => (prevRotation + 90) % 360);

  // Handle download for both external and local PDFs
  const downloadPdf = () => {
    // Show interstitial ad with 40% probability on PDF download
    if (Math.random() < 0.4) {
      showInterstitial();
    }
    
    if (directPdfUrl) {
      // For Google Drive files, create a download link
      const link = document.createElement('a');
      link.href = directPdfUrl;
      link.target = '_blank';
      link.download = title ? `${title}.pdf` : 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!directPdfUrl) {
    return <div className="text-center p-8 text-muted-foreground">جاري تجهيز الملف...</div>;
  }

  return (
    <Card className="w-full mb-6">
      {title && (
        <div className={`border-b p-4 ${
          theme === 'dark' 
            ? 'bg-blue-900/20 border-blue-800' 
            : 'bg-blue-50 border-blue-200'
        }`}>
          <h2 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
          }`}>{title}</h2>
        </div>
      )}
      <CardContent className="p-4">
        {loading && (
          <div className="text-center p-8 text-muted-foreground">
            جاري تحميل الملف...
          </div>
        )}
        
        {error && (
          <div className="text-center p-8">
            <p className="text-red-500">حدث خطأ في تحميل الملف</p>
            <p className="text-sm mt-2 text-muted-foreground">
              يمكنك تحميل الملف مباشرة من الرابط
            </p>
            <Button 
              variant="outline" 
              className={`mt-4 ${
                theme === 'dark' 
                  ? 'bg-blue-900/20 border-blue-700 text-blue-300 hover:bg-blue-900/40' 
                  : 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100'
              }`}
              onClick={downloadPdf}
            >
              <Download className="h-4 w-4 mr-2" />
              تحميل الملف
            </Button>
          </div>
        )}

        <div className="w-full overflow-auto border rounded-md border-border">
          <Document
            file={directPdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex justify-center p-8 text-muted-foreground">
                جاري تحميل الملف...
              </div>
            }
          >
            {!loading && !error && (
              <Page 
                pageNumber={pageNumber} 
                scale={scale} 
                rotate={rotation}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="flex justify-center"
              />
            )}
          </Document>
        </div>

        {!error && !loading && (
          <>
            <div className="flex items-center justify-between w-full mt-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={previousPage} 
                  disabled={pageNumber <= 1}
                  className="border-border bg-background/50 text-foreground hover:bg-accent/60"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <span className="mx-2 text-foreground">
                  صفحة {pageNumber} من {numPages}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextPage} 
                  disabled={numPages !== null && pageNumber >= numPages}
                  className="border-border bg-background/50 text-foreground hover:bg-accent/60"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={zoomIn}
                  className="border-border bg-background/50 text-foreground hover:bg-accent/60"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={zoomOut}
                  className="border-border bg-background/50 text-foreground hover:bg-accent/60"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={rotate}
                  className="border-border bg-background/50 text-foreground hover:bg-accent/60"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={downloadPdf}
                  className="border-border bg-background/50 text-foreground hover:bg-accent/60"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PdfViewer;
