
import { AlertCircle, BookOpen } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface UnderDevelopmentLessonProps {
  subjectName: string;
}

const UnderDevelopmentLesson = ({ subjectName }: UnderDevelopmentLessonProps) => {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <Alert className="bg-blue-900/20 border-blue-800 mb-6">
        <AlertCircle className="h-5 w-5 text-blue-400" />
        <AlertTitle className="text-blue-300 text-lg">قيد التطوير</AlertTitle>
        <AlertDescription className="text-blue-300">
          هذا القسم قيد التطوير حاليًا. سيتم إضافة دروس وملخصات مفصلة لمادة {subjectName} قريبًا.
        </AlertDescription>
      </Alert>
      
      <div className="flex flex-col items-center justify-center text-center p-12 bg-gray-900 rounded-xl shadow-sm border border-gray-800">
        <BookOpen size={64} className="text-blue-400 mb-6 opacity-50" />
        <h2 className="text-2xl font-bold text-white mb-3">
          دروس وملخصات {subjectName}
        </h2>
        <p className="text-gray-400 max-w-lg">
          نعمل حاليًا على إعداد محتوى تعليمي شامل لهذه المادة. سيتضمن المحتوى دروسًا مفصلة، ملخصات، وتمارين تطبيقية لمساعدتك في فهم المادة وتحقيق أفضل النتائج.
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopmentLesson;
