
import { useState, useEffect } from "react";

/**
 * Hook للتحكم في تأخير تنفيذ البحث أثناء الكتابة
 * يساعد في تجنب عمليات البحث المتكررة مع كل حرف
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // إنشاء مؤقت لتأخير تحديث القيمة
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // تنظيف المؤقت عند تغيير القيمة
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
