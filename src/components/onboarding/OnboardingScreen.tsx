
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';

const OnboardingScreen = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigate = useNavigate();
  const { setHasOnboarded } = useOnboarding();

  const screens = [
    {
      title: "استعد للنجاح في البكالوريا",
      description: "منصة تعليمية شاملة تساعدك على التحضير لاجتياز البكالوريا بنجاح وتفوق",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgClass: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      title: "تمارين وحلول متنوعة",
      description: "مئات التمارين المصنفة حسب المادة والصعوبة مع حلول تفصيلية لفهم أعمق",
      icon: Star,
      color: "from-purple-500 to-purple-600",
      bgClass: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      title: "اختبر معلوماتك",
      description: "اختبارات تفاعلية تساعدك على تقييم مستواك والتحضير للامتحان الرسمي",
      icon: Rocket,
      color: "from-green-500 to-green-600",
      bgClass: "bg-green-50 dark:bg-green-950/30"
    }
  ];

  const handleNextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      // Update onboarding state in context
      setHasOnboarded(true);
      // Navigate to home
      navigate('/');
    }
  };

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const progressVariants = {
    inactive: { width: "33.333%", backgroundColor: "#E5E7EB" },
    active: { width: "33.333%", backgroundColor: "#3B82F6" }
  };

  const currentScreenData = screens[currentScreen];
  const isLastScreen = currentScreen === screens.length - 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-64 w-full overflow-hidden">
          <motion.div
            key={currentScreen}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 ${currentScreenData.bgClass}`}
          >
            <motion.div 
              variants={iconVariants}
              className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${currentScreenData.color} text-white mb-6 shadow-lg`}
            >
              <currentScreenData.icon size={40} />
            </motion.div>
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">{currentScreenData.title}</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">{currentScreenData.description}</p>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-8 px-2">
            {screens.map((_, index) => (
              <motion.div
                key={index}
                variants={progressVariants}
                initial="inactive"
                animate={index <= currentScreen ? "active" : "inactive"}
                className="h-1.5 rounded-full"
                style={{ width: "30%" }}
              />
            ))}
          </div>

          <Button 
            onClick={handleNextScreen} 
            className="w-full py-3 flex items-center justify-center gap-2"
          >
            {isLastScreen ? 'ابدأ الآن' : 'التالي'}
            <ArrowRight className="rtl:rotate-180" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
