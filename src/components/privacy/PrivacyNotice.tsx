
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Shield, X } from 'lucide-react';

const PrivacyNotice: React.FC = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('privacy_consent');
    if (!consent) {
      setShowNotice(true);
    } else {
      setConsentGiven(true);
    }
  }, []);

  const handleAcceptConsent = () => {
    localStorage.setItem('privacy_consent', 'true');
    localStorage.setItem('privacy_consent_date', new Date().toISOString());
    setConsentGiven(true);
    setShowNotice(false);
  };

  const handleDeclineConsent = () => {
    localStorage.setItem('privacy_consent', 'false');
    setShowNotice(false);
    // Disable tracking and ads if declined
    localStorage.setItem('adsEnabled', 'false');
  };

  if (!showNotice) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
      <Alert className="bg-white border-blue-200 shadow-lg">
        <Shield className="h-4 w-4 text-blue-500" />
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <AlertDescription className="text-sm">
              نستخدم ملفات تعريف الارتباط والإعلانات لتحسين تجربتك. 
              بالمتابعة، فإنك توافق على سياسة الخصوصية الخاصة بنا.
            </AlertDescription>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowNotice(false)}
            className="p-1 h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex gap-2 mt-3">
          <Button 
            onClick={handleAcceptConsent}
            size="sm"
            className="flex-1"
          >
            موافق
          </Button>
          <Button 
            onClick={handleDeclineConsent}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            رفض
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default PrivacyNotice;
