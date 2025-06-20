import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const EconomicsLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { theme } = useTheme();
  
  const getLessonTitle = () => {
    if (lessonId === 'money') return 'النقود';
    if (lessonId === 'market') return 'السوق والأسعار';
    if (lessonId === 'banks') return 'النظام المصرفي';
    if (lessonId === 'trade') return 'التجارة الخارجية';
    if (lessonId === 'exchange') return 'الصرف';
    if (lessonId === 'unemployment') return 'البطالة';
    if (lessonId === 'inflation') return 'التضخم';
    if (lessonId === 'leadership') return 'القيادة';
    if (lessonId === 'communication') return 'الاتصال';
    if (lessonId === 'control') return 'الرقابة';
    if (lessonId === 'finance') return 'التمويل';
    if (lessonId === 'production') return 'الإنتاج';
    return 'الدرس';
  };
  
  const getPdfUrl = () => {
    if (lessonId === 'money') return 'https://drive.google.com/file/d/18AC8HQEsMZbKYFrgEuScVLseZd9gGTnp/view';
    if (lessonId === 'market') return 'https://drive.google.com/file/d/18UogKDOFdBzGneWz9IEMAip2cSvSiAbj/view';
    if (lessonId === 'banks') return 'https://drive.google.com/file/d/18B_NuO68V0_5zwlTiY7UkIWfTdmjprdU/view';
    if (lessonId === 'trade') return 'https://drive.google.com/file/d/18iw3iasxxHc4vQrp2eHAOSL-k9vC1Fn9/view';
    if (lessonId === 'exchange') return 'https://drive.google.com/file/d/18wPvtqYM15itsvzias5PR8-5_m5BPNNt/view';
    if (lessonId === 'unemployment') return 'https://drive.google.com/file/d/18n6Mfqwqrn7KAmpS8RUUGpgUOBhRSqfb/view';
    if (lessonId === 'inflation') return 'https://drive.google.com/file/d/18g_sv2LE-SXP9NLETQV3r2AutjlVFv6_/view';
    if (lessonId === 'leadership') return 'https://drive.google.com/file/d/18TFk7lKlrVxJT5_VeipYBG0IenVwtuA-/view';
    if (lessonId === 'communication') return 'https://drive.google.com/file/d/18rgZOU4jay-_0O2J0Zf_5Xb4nFx5v3xj/view';
    if (lessonId === 'control') return 'https://drive.google.com/file/d/18VTsa10_nD9TdndZDtMBmOabcvDGsBrY/view';
    if (lessonId === 'finance') return 'https://drive.google.com/file/d/18VtP5-oAGecE_vnv_64oBgdqgFIIsIOS/view';
    if (lessonId === 'production') return 'https://drive.google.com/file/d/18qcOTljujEdydBHOFrGreuFWx44ljxEQ/view';
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
      <Card className="w-full mb-6">
        <div className={`border-b p-4 ${
          theme === 'dark' 
            ? 'bg-blue-900/20 border-blue-800' 
            : 'bg-blue-50 border-blue-200'
        }`}>
          <h2 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
          }`}>{title}</h2>
        </div>
        <CardContent className="p-5">
          <div 
            onClick={openPdfInNewTab}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 hover:border-blue-700/50'
                : 'bg-gray-50 border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ml-4 ${
                theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
              }`}>
                <FileText size={24} className={
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {`درس ${title}`}
                </h3>
                <p className="text-sm text-muted-foreground">
                  PDF • 2-3 MB
                </p>
              </div>
            </div>
            
            <div className="flex">
              <button 
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700/70'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
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
              className={
                theme === 'dark'
                  ? 'bg-blue-900/20 border-blue-700/50 text-blue-300 hover:bg-blue-900/40'
                  : 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100'
              }
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

export default EconomicsLesson;
