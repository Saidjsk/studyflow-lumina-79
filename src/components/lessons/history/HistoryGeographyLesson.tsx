
import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HistoryGeographyLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  const getLessonTitle = () => {
    if (lessonId === 'colonization') return 'الاستعمار في إفريقيا';
    if (lessonId === 'world-wars') return 'الحروب العالمية';
    if (lessonId === 'algeria-revolution') return 'الثورة الجزائرية';
    if (lessonId === 'cold-war') return 'الحرب الباردة';
    if (lessonId === 'geography') return 'دروس الجغرافيا';
    return 'الدرس';
  };
  
  const getPdfUrl = () => {
    if (lessonId === 'colonization') return 'https://drive.google.com/file/d/1MSkdWtQhK4xhH6o6CaFPXHmWFiYYZn5E/view';
    if (lessonId === 'world-wars') return 'https://drive.google.com/file/d/1p5MrdBcmfRRBlDh0gk9cxDpzYNDwFzAh/view';
    if (lessonId === 'algeria-revolution') return 'https://drive.google.com/file/d/18SL9Nk47pxr8tT9A-4Qs4Ul3D-QJI6JR/view';
    if (lessonId === 'cold-war') return 'https://drive.google.com/file/d/1DxN_jkGjj7GJcTVmQZFx9YJJeogDq6cp/view';
    if (lessonId === 'geography') return 'https://drive.google.com/file/d/1z9oA3AjQQjmzhy8GEwGaUZkMpW1dPQ_H/view';
    return '';
  };
  
  const openPdfInNewTab = () => {
    const pdfUrl = getPdfUrl();
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };
  
  const title = getLessonTitle();
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="w-full mb-6 bg-gray-900 border-gray-800">
        <div className="bg-orange-900/20 border-b border-orange-800 p-4">
          <h2 className="text-lg font-semibold text-orange-300">{title}</h2>
        </div>
        <CardContent className="p-5">
          <div 
            onClick={openPdfInNewTab}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-orange-700/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center">
              <div className="p-3 bg-orange-900/30 rounded-lg ml-4">
                <FileText size={24} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {`درس ${title}`}
                </h3>
                <p className="text-sm text-gray-400">
                  PDF • 2-3 MB
                </p>
              </div>
            </div>
            
            <div className="flex">
              <button 
                className="p-2 text-gray-400 hover:text-orange-400 rounded-full hover:bg-gray-700/70 transition-colors"
                aria-label="Open in new tab"
                onClick={openPdfInNewTab}
              >
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              className="bg-orange-900/20 border-orange-700/50 text-orange-300 hover:bg-orange-900/40"
              onClick={openPdfInNewTab}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              فتح الملف في نافذة جديدة
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryGeographyLesson;
