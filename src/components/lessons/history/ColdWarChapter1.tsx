
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const ColdWarChapter1 = () => {
  const { theme } = useTheme();
  
  const pdfUrl = 'https://drive.google.com/file/d/1_eI6EXWtsuQbWSIE3zEqUnP2dUgXpP21/view';
  
  const openPdfInNewTab = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className={`w-full mb-6 ${
        theme === 'dark' 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200'
      }`}>
        <div className={`border-b p-4 ${
          theme === 'dark' 
            ? 'bg-orange-900/20 border-orange-800' 
            : 'bg-orange-50 border-orange-200'
        }`}>
          <h2 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-orange-300' : 'text-orange-800'
          }`}>
            المبحث الأول: بروز الصراع وتشكل العالم
          </h2>
        </div>
        <CardContent className="p-5">
          <div 
            onClick={openPdfInNewTab}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700 hover:border-orange-700/50' 
                : 'bg-gray-50 border-gray-200 hover:border-orange-300'
            }`}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ml-4 ${
                theme === 'dark' 
                  ? 'bg-orange-900/30' 
                  : 'bg-orange-100'
              }`}>
                <FileText size={24} className={
                  theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                } />
              </div>
              <div>
                <h3 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  بروز الصراع وتشكل العالم
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  PDF • الحرب الباردة
                </p>
              </div>
            </div>
            
            <div className="flex">
              <button 
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-orange-400 hover:bg-gray-700/70' 
                    : 'text-gray-600 hover:text-orange-600 hover:bg-gray-100'
                }`}
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
              className={`${
                theme === 'dark' 
                  ? 'bg-orange-900/20 border-orange-700/50 text-orange-300 hover:bg-orange-900/40' 
                  : 'bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100'
              }`}
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

export default ColdWarChapter1;
