
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AlertTriangle } from 'lucide-react';
import { useAds } from '@/contexts/AdsContext';

const AdsSettings = () => {
  const { adsEnabled, toggleAds } = useAds();

  return (
    <Card>
      <CardHeader className="bg-gray-50 dark:bg-gray-800/50">
        <CardTitle className="text-gray-800 dark:text-gray-200">إعدادات الإعلانات</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <Label className="text-base" htmlFor="ads-toggle">تفعيل الإعلانات</Label>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              تمكين أو تعطيل إظهار الإعلانات في التطبيق
            </p>
          </div>
          <Switch
            id="ads-toggle"
            checked={adsEnabled}
            onCheckedChange={toggleAds}
          />
        </div>
        
        {!adsEnabled && (
          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-md flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-800 dark:text-amber-300">
              الإعلانات تساعدنا في الاستمرار بتقديم المحتوى التعليمي مجانًا. نشكرك على دعمك!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdsSettings;
