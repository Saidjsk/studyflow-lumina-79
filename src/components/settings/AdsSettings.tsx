
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Shield } from 'lucide-react';
import { useAds } from '@/contexts/AdsContext';
import SecurityManager from '../security/SecurityManager';

const AdsSettings = () => {
  const { adsEnabled, toggleAds, isSDKSecure } = useAds();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-gray-800/50">
          <CardTitle className="text-gray-200 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            إعدادات الإعلانات والأمان
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="space-y-1">
              <Label className="text-base text-white" htmlFor="ads-toggle">تفعيل الإعلانات</Label>
              <p className="text-sm text-gray-400">
                تمكين أو تعطيل إظهار الإعلانات في التطبيق
              </p>
              {!isSDKSecure && (
                <p className="text-xs text-amber-400 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  SDK غير مؤكد الأمان
                </p>
              )}
            </div>
            <Switch
              id="ads-toggle"
              checked={adsEnabled && isSDKSecure}
              onCheckedChange={toggleAds}
              disabled={!isSDKSecure}
            />
          </div>
          
          {!adsEnabled && (
            <div className="p-3 bg-amber-950/30 border border-amber-900 rounded-md flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-amber-300">
                الإعلانات تساعدنا في الاستمرار بتقديم المحتوى التعليمي مجانًا. نشكرك على دعمك!
              </p>
            </div>
          )}

          {!isSDKSecure && (
            <div className="mt-4 p-3 bg-red-950/30 border border-red-900 rounded-md flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-red-300">
                تم تعطيل الإعلانات لأسباب أمنية. SDK الإعلانات لم يتم التحقق من أمانه.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-gray-800/50">
          <CardTitle className="text-gray-200">إدارة الأمان</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <SecurityManager />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdsSettings;
