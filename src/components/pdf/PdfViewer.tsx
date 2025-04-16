
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAds } from '@/contexts/AdsContext';

// تكوين مكتبة PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
  const { showInterstitial } = useAds();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = () => {
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
    
    // If it's a full URL (external file)
    if (pdfUrl.startsWith('http')) {
      window.open(pdfUrl, '_blank');
    } else {
      // For local files, create an anchor and trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = title ? `${title}.pdf` : 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full mb-6">
      {title && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800 p-4">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300">{title}</h2>
        </div>
      )}
      <CardContent className="flex flex-col items-center p-4">
        {loading && <div className="text-center p-8">جاري تحميل الملف...</div>}
        
        {error && (
          <div className="text-center p-8 text-red-500">
            <p>حدث خطأ في تحميل الملف</p>
            <p className="text-sm mt-2">يرجى التأكد من صحة الرابط أو المحاولة لاحقًا</p>
          </div>
        )}

        <div className="w-full overflow-auto border border-gray-200 dark:border-gray-700 rounded-md">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="flex justify-center p-8">جاري تحميل الملف...</div>}
          >
            <Page 
              pageNumber={pageNumber} 
              scale={scale} 
              rotate={rotation}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="flex justify-center"
            />
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
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <span className="mx-2">
                  صفحة {pageNumber} من {numPages}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextPage} 
                  disabled={numPages !== null && pageNumber >= numPages}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Button variant="outline" size="sm" onClick={zoomIn}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={zoomOut}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={rotate}>
                  <RotateCw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={downloadPdf}>
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
