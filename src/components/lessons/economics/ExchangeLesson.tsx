import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, ArrowUpDown, Target } from 'lucide-react';

const ExchangeLesson = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6" dir="rtl">
      {/* Header Card */}
      <Card className="w-full">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">
                الوحدة الخامسة: الصرف
              </CardTitle>
              <p className="text-muted-foreground mt-1">
                المجال المفاهيمي الأول: الميكانيزمات الاقتصادية — مادة الاقتصاد والمناجمنت
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* مفهوم سعر الصرف */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowUpDown className="w-6 h-6 text-primary" />
            مفهوم سعر الصرف
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border-r-4 border-primary">
            <p className="text-foreground font-medium">
              سعر الصرف هو السعر الذي تتبادل به عملة دولة معينة مقابل عملة دولة أخرى، 
              أو عدد الوحدات من العملة المحلية اللازمة للحصول على وحدة واحدة من العملة الأجنبية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blue-700 dark:text-blue-300">
                  سعر الصرف الاسمي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  السعر المعلن والمتداول في السوق، والذي يعبر عن قيمة العملة المحلية مقابل العملة الأجنبية
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                  <p className="text-sm font-medium">مثال:</p>
                  <p className="text-sm text-muted-foreground">
                    1 دولار أمريكي = 135 دينار جزائري
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-700 dark:text-green-300">
                  سعر الصرف الحقيقي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  سعر الصرف الاسمي معدلاً بمستوى الأسعار في البلدين، ويعكس القوة الشرائية الحقيقية
                </p>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-medium">المعادلة:</p>
                  <p className="text-sm text-muted-foreground">
                    السعر الحقيقي = (السعر الاسمي × مستوى الأسعار الخارجية) ÷ مستوى الأسعار المحلية
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* أنظمة أسعار الصرف */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            أنظمة أسعار الصرف
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* النظام الثابت */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-lg text-orange-700 dark:text-orange-300">
                  نظام سعر الصرف الثابت
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  يحدده البنك المركزي ويبقى ثابتاً لفترات طويلة
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">المزايا:</p>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• استقرار في التجارة الخارجية</li>
                    <li>• تسهيل التخطيط الاقتصادي</li>
                    <li>• تقليل مخاطر المعاملات الدولية</li>
                    <li>• جذب الاستثمارات طويلة الأجل</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">العيوب:</p>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• قد لا يعكس القيمة الحقيقية للعملة</li>
                    <li>• يتطلب احتياطيات كبيرة</li>
                    <li>• صعوبة التكيف مع التغيرات</li>
                    <li>• قد يؤدي لأزمات مالية</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* النظام المرن */}
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700 dark:text-purple-300">
                  نظام سعر الصرف المرن (العائم)
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  يتحدد بحرية وفقاً لقوى العرض والطلب
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">المزايا:</p>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• يعكس القيمة الحقيقية للعملة</li>
                    <li>• تكيف تلقائي مع التغيرات</li>
                    <li>• استقلالية السياسة النقدية</li>
                    <li>• لا يحتاج احتياطيات كبيرة</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">العيوب:</p>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• عدم الاستقرار والتقلبات الحادة</li>
                    <li>• زيادة مخاطر التجارة الدولية</li>
                    <li>• صعوبة التخطيط طويل الأجل</li>
                    <li>• تأثير المضاربة</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-indigo-200 dark:border-indigo-800">
            <CardHeader>
              <CardTitle className="text-lg text-indigo-700 dark:text-indigo-300">
                النظام المختلط (التعويم المدار)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                يجمع بين مرونة السوق وتدخل البنك المركزي عند الحاجة لتجنب التقلبات الحادة
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-foreground">خصائص النظام:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• حرية نسبية في تحديد السعر</li>
                    <li>• تدخل عند التقلبات الحادة</li>
                    <li>• حماية من المضاربة</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-foreground">أمثلة:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• الصين (تعويم مدار للرنمينبي)</li>
                    <li>• الهند (الروبية الهندية)</li>
                    <li>• البرازيل (الريال البرازيلي)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* العوامل المؤثرة */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            العوامل المؤثرة في سعر الصرف
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-foreground">ميزان المدفوعات</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                فائض يقوي العملة، عجز يضعفها
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-foreground">معدلات التضخم</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                التضخم المرتفع يضعف قيمة العملة
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-foreground">أسعار الفائدة</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                فروقات الفائدة تؤثر على التدفقات الرأسمالية
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-foreground">النمو الاقتصادي</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                اقتصاد قوي يعزز قيمة العملة
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-foreground">الاستقرار السياسي</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                عدم الاستقرار يضعف ثقة المستثمرين
              </p>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpDown className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-foreground">التدفقات الرأسمالية</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                الاستثمارات الأجنبية تقوي العملة
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* آثار تغير سعر الصرف */}
      <Card>
        <CardHeader>
          <CardTitle>آثار تغيرات سعر الصرف على الاقتصاد</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* انخفاض قيمة العملة */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  انخفاض قيمة العملة (التخفيض)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">الآثار الإيجابية:</p>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• زيادة القدرة التنافسية للصادرات</li>
                    <li>• نمو القطاعات التصديرية</li>
                    <li>• تحفيز السياحة الوافدة</li>
                    <li>• جذب الاستثمار الأجنبي المباشر</li>
                    <li>• خلق فرص عمل في القطاع التصديري</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">الآثار السلبية:</p>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• ارتفاع تكلفة الواردات</li>
                    <li>• ضغوط تضخمية مستوردة</li>
                    <li>• زيادة عبء المديونية بالعملة الأجنبية</li>
                    <li>• انخفاض القوة الشرائية للمواطنين</li>
                    <li>• ارتفاع تكلفة التكنولوجيا المستوردة</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* ارتفاع قيمة العملة */}
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  ارتفاع قيمة العملة (التقوية)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">الآثار الإيجابية:</p>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• انخفاض تكلفة الواردات</li>
                    <li>• تخفيف الضغوط التضخمية</li>
                    <li>• زيادة القوة الشرائية للمواطنين</li>
                    <li>• تقليل عبء المديونية الخارجية</li>
                    <li>• رخص التكنولوجيا والمعدات المستوردة</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">الآثار السلبية:</p>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• انخفاض القدرة التنافسية للصادرات</li>
                    <li>• تراجع الإيرادات التصديرية</li>
                    <li>• تراجع السياحة الوافدة</li>
                    <li>• فقدان فرص العمل في القطاعات التصديرية</li>
                    <li>• تدهور الميزان التجاري</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* سياسات سعر الصرف */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            سياسات إدارة سعر الصرف
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-blue-700 dark:text-blue-300">
                  التدخل في سوق الصرف
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground mb-2">
                  شراء أو بيع العملات الأجنبية لتحقيق الاستقرار
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• شراء العملة المحلية لتقويتها</div>
                  <div>• بيع العملة المحلية لتضعيفها</div>
                  <div>• إدارة الاحتياطيات الأجنبية</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-green-700 dark:text-green-300">
                  السياسة النقدية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground mb-2">
                  استخدام أدوات السياسة النقدية للتأثير على سعر الصرف
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• رفع أسعار الفائدة لتقوية العملة</div>
                  <div>• خفض أسعار الفائدة لتضعيف العملة</div>
                  <div>• إدارة السيولة في السوق</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-purple-700 dark:text-purple-300">
                  ضوابط الصرف
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground mb-2">
                  فرض قيود إدارية على تحويل وتداول العملة
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• تحديد حصص التحويل</div>
                  <div>• ترخيص المعاملات الكبيرة</div>
                  <div>• تحديد أولويات الاستخدام</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">أهداف إدارة سعر الصرف</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <div>• تحقيق الاستقرار الاقتصادي</div>
                <div>• دعم النمو الاقتصادي</div>
                <div>• التحكم في التضخم</div>
              </div>
              <div>
                <div>• تحسين الميزان التجاري</div>
                <div>• جذب الاستثمارات الأجنبية</div>
                <div>• حماية الاحتياطيات الأجنبية</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="text-sm">
              سعر الصرف أداة مهمة لتحقيق التوازن الاقتصادي والتنافسية الدولية
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeLesson;