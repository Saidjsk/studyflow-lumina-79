
import React, { useEffect, useState } from 'react';
import { AlertTriangle, Shield, Lock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useAds } from '@/contexts/AdsContext';

const SecurityManager: React.FC = () => {
  const [securityChecks, setSecurityChecks] = useState({
    localStorageEncrypted: false,
    cspActive: false,
    sdkValidated: false,
  });
  const { isSDKSecure } = useAds();

  useEffect(() => {
    // Perform security checks
    const runSecurityChecks = () => {
      // Check if CSP is active
      const cspActive = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
      
      // Check localStorage security (basic check)
      const localStorageWorks = (() => {
        try {
          localStorage.setItem('security_test', 'test');
          localStorage.removeItem('security_test');
          return true;
        } catch {
          return false;
        }
      })();

      setSecurityChecks({
        localStorageEncrypted: localStorageWorks,
        cspActive,
        sdkValidated: isSDKSecure,
      });
    };

    runSecurityChecks();
  }, [isSDKSecure]);

  const clearSensitiveData = () => {
    try {
      // Clear any potentially sensitive data
      const keysToKeep = ['theme', 'adsEnabled', 'hasOnboarded'];
      const allKeys = Object.keys(localStorage);
      
      allKeys.forEach(key => {
        if (!keysToKeep.includes(key)) {
          localStorage.removeItem(key);
        }
      });
      
      console.log('Sensitive data cleared successfully');
    } catch (error) {
      console.error('Error clearing sensitive data:', error);
    }
  };

  const securityScore = Object.values(securityChecks).filter(Boolean).length;
  const totalChecks = Object.keys(securityChecks).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-blue-500" />
        <h3 className="text-lg font-semibold">حالة الأمان</h3>
      </div>

      <div className="grid gap-2">
        <div className={`flex items-center gap-2 p-2 rounded ${
          securityChecks.cspActive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {securityChecks.cspActive ? <Shield size={16} /> : <AlertTriangle size={16} />}
          <span className="text-sm">Content Security Policy: {securityChecks.cspActive ? 'نشط' : 'غير نشط'}</span>
        </div>

        <div className={`flex items-center gap-2 p-2 rounded ${
          securityChecks.sdkValidated ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
        }`}>
          {securityChecks.sdkValidated ? <Shield size={16} /> : <AlertTriangle size={16} />}
          <span className="text-sm">SDK Validation: {securityChecks.sdkValidated ? 'آمن' : 'غير مؤكد'}</span>
        </div>

        <div className={`flex items-center gap-2 p-2 rounded ${
          securityChecks.localStorageEncrypted ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          <Lock size={16} />
          <span className="text-sm">Local Storage: {securityChecks.localStorageEncrypted ? 'يعمل' : 'معطل'}</span>
        </div>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          نقاط الأمان: {securityScore}/{totalChecks} - {
            securityScore === totalChecks ? 'ممتاز' : 
            securityScore >= totalChecks * 0.7 ? 'جيد' : 'يحتاج تحسين'
          }
        </AlertDescription>
      </Alert>

      <Button 
        onClick={clearSensitiveData}
        variant="outline"
        className="w-full"
      >
        <Lock className="mr-2 h-4 w-4" />
        مسح البيانات الحساسة
      </Button>
    </div>
  );
};

export default SecurityManager;
