import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, TrendingDown, Globe, DollarSign, Building, Users } from 'lucide-react';

const ForeignTradeLesson = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6" dir="rtl">
      {/* Header Card */}
      <Card className="w-full">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">
                الوحدة الرابعة: التجارة الخارجية
              </CardTitle>
              <p className="text-muted-foreground mt-1">
                المجال المفاهيمي الأول: الميكانيزمات الاقتصادية — مادة الاقتصاد والمناجمنت
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* المفهوم الأساسي */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            مفهوم التجارة الخارجية
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
            <p className="text-foreground font-medium">
              التجارة الخارجية هي تبادل السلع والخدمات عبر الحدود الوطنية بين الدول المختلفة، 
              وتشمل عمليتين أساسيتين: الاستيراد والتصدير.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  الاستيراد (Import)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  شراء السلع والخدمات من الدول الأجنبية لتلبية الاحتياجات المحلية
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    المواد الخام
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    التكنولوجيا
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    السلع الاستهلاكية
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  التصدير (Export)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  بيع السلع والخدمات المنتجة محلياً إلى الأسواق الخارجية
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">
                    النفط والغاز
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    المنتجات الزراعية
                  </Badge>
                  <Badge variant="outline" className="mr-2">
                    الصناعات التحويلية
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* أسباب قيام التجارة الخارجية */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            أسباب قيام التجارة الخارجية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">اختلاف الموارد الطبيعية</h4>
              <p className="text-sm text-muted-foreground">
                توزيع غير متساوٍ للثروات الطبيعية (نفط، معادن، مياه)
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">التخصص الإنتاجي</h4>
              <p className="text-sm text-muted-foreground">
                تركيز كل دولة على إنتاج ما تجيده بأفضل كفاءة
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">التقدم التكنولوجي</h4>
              <p className="text-sm text-muted-foreground">
                اختلاف مستويات التطور التقني والابتكار
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">اختلاف تكاليف الإنتاج</h4>
              <p className="text-sm text-muted-foreground">
                تباين في أسعار العمالة والمواد الخام
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">التنوع المناخي</h4>
              <p className="text-sm text-muted-foreground">
                اختلاف الظروف الجغرافية والمناخية
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">اختلاف الأذواق</h4>
              <p className="text-sm text-muted-foreground">
                تنوع الثقافات والتفضيلات الاستهلاكية
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* النظريات */}
      <Card>
        <CardHeader>
          <CardTitle>نظريات التجارة الخارجية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  نظرية آدم سميث
                </Badge>
              </div>
              <h3 className="text-lg font-semibold">نظرية الميزة المطلقة (1776)</h3>
              <p className="text-muted-foreground">
                كل دولة يجب أن تتخصص في إنتاج السلع التي تنتجها بتكلفة مطلقة أقل من الدول الأخرى
              </p>
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                <p className="text-sm font-medium">مثال:</p>
                <p className="text-sm text-muted-foreground">
                  البرازيل تنتج القهوة بتكلفة أقل من ألمانيا، بينما ألمانيا تنتج السيارات بتكلفة أقل من البرازيل
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  نظرية ديفيد ريكاردو
                </Badge>
              </div>
              <h3 className="text-lg font-semibold">نظرية الميزة النسبية (1817)</h3>
              <p className="text-muted-foreground">
                حتى لو كانت دولة أكثر كفاءة في إنتاج جميع السلع، فالتجارة مفيدة عند التخصص في السلع ذات الميزة النسبية الأكبر
              </p>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                <p className="text-sm font-medium">مثال:</p>
                <p className="text-sm text-muted-foreground">
                  دولة متقدمة تنتج الكمبيوتر والملابس بكفاءة أكبر، لكن ميزتها النسبية في الكمبيوتر أكبر، فتتخصص فيه
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* السياسات التجارية */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-6 h-6 text-primary" />
            السياسات التجارية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-lg text-green-700 dark:text-green-300">
                  سياسة التجارة الحرة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  إزالة جميع القيود والحواجز أمام التجارة الدولية
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">تحرير الأسواق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">إلغاء الرسوم الجمركية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">حرية انتقال السلع</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-lg text-orange-700 dark:text-orange-300">
                  سياسة الحماية التجارية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  فرض قيود لحماية الصناعات المحلية من المنافسة الأجنبية
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">الرسوم الجمركية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">الحصص الكمية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">القيود النوعية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">الإعانات المحلية</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* ميزان المدفوعات */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            ميزان المدفوعات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
            <p className="text-foreground font-medium">
              سجل محاسبي منتظم يسجل جميع المعاملات الاقتصادية بين دولة ما وبقية العالم خلال فترة زمنية محددة (سنة عادة)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-blue-700 dark:text-blue-300">
                  الحساب الجاري
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <div>• تجارة السلع (الصادرات - الواردات)</div>
                  <div>• تجارة الخدمات</div>
                  <div>• عوائد الاستثمار</div>
                  <div>• التحويلات الجارية</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-700 dark:text-green-300">
                  حساب رأس المال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <div>• الاستثمار الأجنبي المباشر</div>
                  <div>• استثمار المحفظة</div>
                  <div>• القروض الخارجية</div>
                  <div>• الاستثمارات الأخرى</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-purple-700 dark:text-purple-300">
                  الاحتياطات الرسمية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <div>• احتياطي الذهب</div>
                  <div>• احتياطي العملات الأجنبية</div>
                  <div>• حقوق السحب الخاصة</div>
                  <div>• المركز الاحتياطي في صندوق النقد</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* أسعار الصرف */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            أسعار الصرف والتجارة الخارجية
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">تعريف سعر الصرف</h4>
            <p className="text-muted-foreground">
              سعر عملة دولة معينة مقوماً بعملة دولة أخرى، وهو محدد أساسي للقدرة التنافسية في التجارة الدولية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  انخفاض سعر الصرف (تخفيض العملة)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">التأثير الإيجابي:</p>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <div>• زيادة الصادرات (أسعار تنافسية)</div>
                    <div>• جذب السياح الأجانب</div>
                    <div>• تحسين الميزان التجاري</div>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">التأثير السلبي:</p>
                  <div className="text-sm text-red-700 dark:text-red-300">
                    <div>• ارتفاع تكلفة الواردات</div>
                    <div>• ضغوط تضخمية</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  ارتفاع سعر الصرف (تقوية العملة)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">التأثير الإيجابي:</p>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <div>• انخفاض تكلفة الواردات</div>
                    <div>• زيادة القوة الشرائية</div>
                    <div>• تحكم في التضخم</div>
                  </div>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">التأثير السلبي:</p>
                  <div className="text-sm text-red-700 dark:text-red-300">
                    <div>• تراجع الصادرات</div>
                    <div>• فقدان القدرة التنافسية</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* خلاصة وتطبيقات */}
      <Card>
        <CardHeader>
          <CardTitle>خلاصة وتطبيقات عملية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">الأهمية الاقتصادية للتجارة الخارجية</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <div>• تحسين مستوى المعيشة</div>
                <div>• نقل التكنولوجيا والمعرفة</div>
                <div>• توفير العملة الصعبة</div>
              </div>
              <div>
                <div>• خلق فرص العمل</div>
                <div>• زيادة الاستثمارات</div>
                <div>• تنويع الاقتصاد الوطني</div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="text-center">
            <Badge variant="secondary" className="text-sm">
              تذكر: التجارة الخارجية محرك أساسي للنمو الاقتصادي والتنمية المستدامة
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeignTradeLesson;