
import { BrowserRouter } from 'react-router-dom';
import OnboardingScreen from '@/components/onboarding/OnboardingScreen';

const Onboarding = () => {
  // Wrap the OnboardingScreen with BrowserRouter to provide the router context
  return (
    <BrowserRouter>
      <OnboardingScreen />
    </BrowserRouter>
  );
};

export default Onboarding;
