
import { QuizQuestion } from "@/types/quiz";

// History and Geography quiz questions
export const quizData: QuizQuestion[] = [
  // History section
  {
    id: 1,
    text: "متى تم الإعلان عن مبدأ ترومان؟",
    options: ["1945", "1947", "1949", "1951"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "easy"
  },
  {
    id: 2,
    text: "كان الهدف من مشروع مارشال:",
    options: ["دعم الحركات التحررية", "إعادة إعمار أوروبا", "مواجهة الاتحاد السوفياتي عسكريًا", "تقسيم ألمانيا"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "easy"
  },
  {
    id: 3,
    text: "ماهي السياسة التي انتهجها الاتحاد السوفياتي لمواجهة السياسة الأمريكية؟",
    options: ["مشروع مارشال", "سياسة الاحتواء", "الكوميكون", "الأحلاف العسكرية"],
    correctAnswer: 2,
    category: "تاريخ",
    difficulty: "easy"
  },
  {
    id: 4,
    text: "عرف العالم صراعًا بين القطبين بعد:",
    options: ["الحرب العالمية الأولى", "الحرب العالمية الثانية", "الحرب الباردة", "أزمة كوبا"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "easy"
  },
  {
    id: 5,
    text: "من أبرز المنظمات التي أسسها الاتحاد السوفياتي:",
    options: ["منظمة الناتو", "الكوميكون", "صندوق النقد الدولي", "الأمم المتحدة"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "easy"
  },
  {
    id: 6,
    text: "حدثت أزمة الصواريخ الكوبية في سنة:",
    options: ["1962", "1956", "1973", "1980"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "medium"
  },
  {
    id: 7,
    text: "كانت أزمة برلين 1948 نتيجة لـ:",
    options: ["محاولة السوفيات فرض حصار على برلين", "التدخل الأمريكي في كوريا", "الثورة المجرية", "سياسة الوفاق الدولي"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "medium"
  },
  {
    id: 8,
    text: "من نتائج سياسة التعايش السلمي:",
    options: ["استمرار الحرب الباردة", "تخفيف التوتر بين المعسكرين", "انهيار الاتحاد السوفياتي", "إنهاء النزاعات في الشرق الأوسط"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "medium"
  },
  {
    id: 9,
    text: "متى انهار الاتحاد السوفياتي؟",
    options: ["1989", "1991", "1993", "1995"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "medium"
  },
  {
    id: 10,
    text: "من العوامل التي ساعدت على نجاح حركات التحرر:",
    options: ["الدعم السوفياتي", "انعدام الوعي الوطني", "الاستعمار الثقافي", "ضعف التنظيم"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "medium"
  },
  {
    id: 11,
    text: "أي عام شهد إعلان قيام دولة الاحتلال الإسرائيلي؟",
    options: ["1945", "1947", "1948", "1956"],
    correctAnswer: 2,
    category: "تاريخ",
    difficulty: "medium"
  },
  {
    id: 12,
    text: "متى اندلعت ثورة التحرير الجزائرية؟",
    options: ["1952", "1954", "1962", "1975"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "hard"
  },
  
  // Geography section
  {
    id: 13,
    text: "ما هو المعيار الأساسي لتصنيف الدول إلى متقدمة ونامية؟",
    options: ["عدد السكان", "الناتج المحلي الإجمالي", "المساحة", "المناخ"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "easy"
  },
  {
    id: 14,
    text: "أي من التكتلات الاقتصادية يعد الأقدم؟",
    options: ["الاتحاد الأوروبي", "النافتا", "الآسيان", "الميركوسور"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "easy"
  },
  {
    id: 15,
    text: "أي من الدول التالية تعد أكبر مصدر للنفط في العالم؟",
    options: ["الولايات المتحدة", "روسيا", "السعودية", "كندا"],
    correctAnswer: 2,
    category: "جغرافيا",
    difficulty: "easy"
  },
  {
    id: 16,
    text: "تمتلك الولايات المتحدة أكبر:",
    options: ["احتياطي نفطي", "قوة عسكرية", "ناتج محلي إجمالي", "إنتاج زراعي"],
    correctAnswer: 2,
    category: "جغرافيا",
    difficulty: "easy"
  },
  {
    id: 17,
    text: "أي دولة تعد القوة الاقتصادية الأكبر في الفضاء الباسيفيكي؟",
    options: ["الصين", "اليابان", "أستراليا", "كوريا الجنوبية"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 18,
    text: "أين يقع مقر الاتحاد الأوروبي؟",
    options: ["باريس", "بروكسل", "روما", "برلين"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 19,
    text: "ما هو المصدر الرئيسي لعائدات نيجيريا؟",
    options: ["الزراعة", "السياحة", "النفط", "الصناعة"],
    correctAnswer: 2,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 20,
    text: "أي قطاع يشكل القوة الاقتصادية الأكبر في الهند؟",
    options: ["الزراعة", "التكنولوجيا والخدمات", "التعدين", "الصناعة"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 21,
    text: "أهم موانئ الجزائر هو:",
    options: ["ميناء عنابة", "ميناء الجزائر", "ميناء بجاية", "ميناء مستغانم"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 22,
    text: "ما هو أهم قطاع اقتصادي في البرازيل؟",
    options: ["الزراعة", "السياحة", "التعدين", "الطاقة"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "hard"
  },
  
  // More History questions
  {
    id: 23,
    text: "أي رئيس سوفياتي كان وراء سياسات البيريسترويكا والغلاسنوست؟",
    options: ["ليونيد بريجنيف", "نيكيتا خروتشوف", "ميخائيل غورباتشوف", "يوري أندروبوف"],
    correctAnswer: 2,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 24,
    text: "من آثار سقوط الاتحاد السوفياتي على العالم الثالث:",
    options: ["ضعف الدعم للحركات التحررية", "زيادة الهيمنة السوفياتية", "ازدهار الاقتصاد الاشتراكي", "انهيار الولايات المتحدة"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 25,
    text: "أي من الدول التالية كانت محسوبة على المعسكر الشرقي؟",
    options: ["كوبا", "فرنسا", "إسبانيا", "تركيا"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 26,
    text: "من نتائج الصراع بين المعسكرين على دول العالم الثالث:",
    options: ["تطورها اقتصاديًا", "تعرضها للحروب بالوكالة", "اندماجها في المعسكر الغربي", "زيادة الاستعمار الأوروبي"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 27,
    text: "دعمت الجزائر حركات التحرر في:",
    options: ["فلسطين", "الولايات المتحدة", "كندا", "السويد"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 28,
    text: "متى انضمت الجزائر إلى الأمم المتحدة؟",
    options: ["1960", "1962", "1965", "1970"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 29,
    text: "كان أول رئيس للجزائر بعد الاستقلال:",
    options: ["أحمد بن بلة", "هواري بومدين", "الشاذلي بن جديد", "عبد العزيز بوتفليقة"],
    correctAnswer: 0,
    category: "تاريخ",
    difficulty: "hard"
  },
  {
    id: 30,
    text: "متى تم إصدار أول دستور جزائري بعد الاستقلال؟",
    options: ["1962", "1963", "1976", "1989"],
    correctAnswer: 1,
    category: "تاريخ",
    difficulty: "hard"
  },
  
  // More Geography questions
  {
    id: 31,
    text: "أهم مشكلة تعاني منها دول الجنوب:",
    options: ["الفقر", "زيادة التكنولوجيا", "كثرة الاستثمارات", "السيطرة على الأسواق"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "easy"
  },
  {
    id: 32,
    text: "من العوامل التي تعيق التنمية في دول الجنوب:",
    options: ["ضعف البنية التحتية", "ارتفاع مستوى الدخل", "السيطرة على التكنولوجيا", "الاستقرار السياسي"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "easy"
  },
  {
    id: 33,
    text: "الهند عضو في مجموعة:",
    options: ["الاتحاد الأوروبي", "أوبك", "بريكس", "آسيان"],
    correctAnswer: 2,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 34,
    text: "من أهم المنتجات الصناعية الهندية:",
    options: ["الألماس", "البرمجيات", "القطن", "السيارات"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 35,
    text: "أي نهر مهم في البرازيل يساعد في التنمية؟",
    options: ["نهر النيل", "نهر الأمازون", "نهر المسيسيبي", "نهر الدانوب"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 36,
    text: "تعتمد البرازيل على إنتاج:",
    options: ["النفط", "البن", "الغاز الطبيعي", "الفولاذ"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 37,
    text: "كم تبلغ مساحة الجزائر؟",
    options: ["1.5 مليون كم²", "2.38 مليون كم²", "3 مليون كم²", "800 ألف كم²"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 38,
    text: "أي من الموانئ التالية هو الأهم في الجزائر من حيث التبادل التجاري؟",
    options: ["ميناء وهران", "ميناء الجزائر", "ميناء عنابة", "ميناء بجاية"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 39,
    text: "العملة الرسمية للاتحاد الأوروبي هي:",
    options: ["الدولار", "اليورو", "الفرنك", "الروبل"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 40,
    text: "أهم شريك تجاري للاتحاد الأوروبي:",
    options: ["الولايات المتحدة", "اليابان", "البرازيل", "كندا"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 41,
    text: "أي ولاية أمريكية هي الأكبر من حيث المساحة؟",
    options: ["تكساس", "ألاسكا", "كاليفورنيا", "نيويورك"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 42,
    text: "أي منطقة في الولايات المتحدة تُعرف بأنها \"وادي السيليكون\"؟",
    options: ["نيويورك", "كاليفورنيا", "تكساس", "فلوريدا"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 43,
    text: "روسيا تمتد عبر:",
    options: ["قارتين", "قارة واحدة", "ثلاث قارات", "أربع قارات"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 44,
    text: "روسيا من أكبر الدول المنتجة لـ:",
    options: ["النفط", "الألماس", "القمح", "النحاس"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 45,
    text: "أسرع المدن الصينية نموًا اقتصاديًا هي:",
    options: ["بكين", "شنغهاي", "شنتشن", "هونغ كونغ"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 46,
    text: "من أكبر الصناعات في الصين:",
    options: ["صناعة الهواتف", "صناعة الأدوية", "صناعة السيارات", "صناعة الملابس"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 47,
    text: "الدولة التي تحتل المرتبة الأولى عالميًا في عدد السكان:",
    options: ["الهند", "الصين", "الولايات المتحدة", "إندونيسيا"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 48,
    text: "من أسباب ارتفاع الكثافة السكانية في بعض الدول:",
    options: ["توفر الموارد الطبيعية", "النمو الاقتصادي", "المناخ المعتدل", "الحروب"],
    correctAnswer: 2,
    category: "جغرافيا",
    difficulty: "medium"
  },
  {
    id: 49,
    text: "مجموعة العشرين (G20) هي:",
    options: ["تحالف عسكري", "تكتل اقتصادي عالمي", "منظمة بيئية", "تحالف سياحي"],
    correctAnswer: 1,
    category: "جغرافيا",
    difficulty: "hard"
  },
  {
    id: 50,
    text: "منظمة التجارة العالمية تهدف إلى:",
    options: ["تنظيم العلاقات التجارية", "السيطرة على الأسواق", "دعم الدول النامية", "توفير القروض المالية"],
    correctAnswer: 0,
    category: "جغرافيا",
    difficulty: "hard"
  },
  
  // Original economics questions
  {
    id: 51,
    text: "ما هو الفرق بين التكلفة الثابتة والتكلفة المتغيرة؟",
    options: [
      "التكلفة الثابتة تتغير مع حجم الإنتاج والمتغيرة ثابتة",
      "التكلفة الثابتة لا تتغير مع حجم الإنتاج والمتغيرة تتغير",
      "التكلفة الثابتة والمتغيرة كلاهما ثابت",
      "التكلفة الثابتة والمتغيرة كلاهما متغير"
    ],
    correctAnswer: 1,
    category: "اقتصاد",
    difficulty: "easy"
  },
  {
    id: 52,
    text: "ما هو مفهوم التضخم الاقتصادي؟",
    options: [
      "انخفاض المستوى العام للأسعار",
      "ثبات المستوى العام للأسعار",
      "ارتفاع المستوى العام للأسعار",
      "تذبذب المستوى العام للأسعار"
    ],
    correctAnswer: 2,
    category: "اقتصاد",
    difficulty: "easy"
  },
  {
    id: 53,
    text: "ما هي الميزانية العمومية؟",
    options: [
      "قائمة تبين أرباح وخسائر الشركة",
      "قائمة تبين أصول وخصوم الشركة في تاريخ محدد",
      "قائمة تبين التدفقات النقدية للشركة",
      "قائمة تبين مصاريف الشركة"
    ],
    correctAnswer: 1,
    category: "اقتصاد",
    difficulty: "medium"
  },
  {
    id: 54,
    text: "ما هو السوق الاحتكاري؟",
    options: [
      "سوق به عدد كبير من البائعين والمشترين",
      "سوق به بائع واحد وعدد كبير من المشترين",
      "سوق به عدد قليل من البائعين وعدد كبير من المشترين",
      "سوق به عدد قليل من البائعين والمشترين"
    ],
    correctAnswer: 1,
    category: "اقتصاد",
    difficulty: "medium"
  },
  {
    id: 55,
    text: "ما هو المقصود بالناتج المحلي الإجمالي (GDP)؟",
    options: [
      "القيمة السوقية لكل السلع والخدمات النهائية المنتجة في بلد ما خلال فترة زمنية",
      "مجموع الضرائب المحصلة في بلد ما",
      "مجموع الصادرات ناقص الواردات لبلد ما",
      "مجموع الاستثمارات الأجنبية في بلد ما"
    ],
    correctAnswer: 0,
    category: "اقتصاد",
    difficulty: "hard"
  }
];

// Group questions by difficulty level
export const getQuestionsByLevel = (level: number): QuizQuestion[] => {
  let difficulty: "easy" | "medium" | "hard";
  
  switch(level) {
    case 1:
      difficulty = "easy";
      break;
    case 2:
      difficulty = "medium";
      break;
    case 3:
      difficulty = "hard";
      break;
    default:
      difficulty = "easy";
  }
  
  return quizData.filter(question => question.difficulty === difficulty);
};
