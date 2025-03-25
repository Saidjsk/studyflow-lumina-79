
import { SearchResult } from './searchData';

// تنفيذ مسافة ليفنشتاين للتطابق الضبابي
export const levenshteinDistance = (a: string, b: string): number => {
  // الحالات الأساسية
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  
  // إنشاء مصفوفة المسافات
  const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
  
  // تهيئة الحواف
  for (let i = 0; i <= a.length; i++) {
    matrix[i][0] = i;
  }
  
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }
  
  // حساب المسافات
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // حذف
        matrix[i][j - 1] + 1,      // إدخال
        matrix[i - 1][j - 1] + cost // استبدال
      );
    }
  }
  
  return matrix[a.length][b.length];
};

// خوارزمية البحث المحسنة
export const performSearch = (searchDatabase: SearchResult[], searchQuery: string): SearchResult[] => {
  if (!searchQuery.trim()) return [];
  
  const normalizedQuery = searchQuery.trim().toLowerCase();
  
  // البحث في قاعدة البيانات وحساب درجة الملاءمة
  return searchDatabase
    .map(item => {
      const titleLower = item.title.toLowerCase();
      const excerptLower = item.excerpt?.toLowerCase() || '';
      const typeLower = item.type.toLowerCase();
      
      // حساب درجة الملاءمة
      let score = 0;
      
      // تطابق العنوان بالضبط
      if (titleLower === normalizedQuery) {
        score += 100;
      }
      
      // العنوان يبدأ بالاستعلام
      if (titleLower.startsWith(normalizedQuery)) {
        score += 50;
      }
      
      // العنوان يحتوي على الاستعلام
      if (titleLower.includes(normalizedQuery)) {
        score += 30;
      }
      
      // النوع يطابق الاستعلام
      if (typeLower.includes(normalizedQuery)) {
        score += 20;
      }
      
      // المحتوى يحتوي على الاستعلام
      if (excerptLower.includes(normalizedQuery)) {
        score += 10;
      }
      
      // التطابق الضبابي للكلمات المكتوبة بشكل خاطئ
      if (levenshteinDistance(titleLower, normalizedQuery) <= 2) {
        score += 5;
      }
      
      return { ...item, relevance: score };
    })
    .filter(item => (item.relevance || 0) > 0) // استبعاد النتائج غير المتطابقة
    .sort((a, b) => (b.relevance || 0) - (a.relevance || 0)) // ترتيب حسب الملاءمة
    .slice(0, 10); // تحديد النتائج للأفضل 10
};
