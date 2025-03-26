
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { OnboardingProvider, useOnboarding } from "./contexts/OnboardingContext";
import { ChatProvider } from "./contexts/ChatContext";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Subject from "./pages/Subject";
import YearContent from "./pages/YearContent";
import Calculator from "./pages/Calculator";
import Quiz from "./pages/Quiz";
import Exercises from "./pages/Exercises";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";

const queryClient = new QueryClient();

// Use this component inside the OnboardingProvider
const ProtectedRoutes = () => {
  const { hasOnboarded } = useOnboarding();
  
  // Conditional routing component
  const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
    if (!hasOnboarded) {
      return <Navigate to="/onboarding" replace />;
    }
    
    return <Layout>{children}</Layout>;
  };
  
  return (
    <Routes>
      <Route path="/onboarding" element={
        hasOnboarded ? <Navigate to="/" replace /> : <Onboarding />
      } />
      <Route 
        path="/" 
        element={
          <ConditionalLayout>
            <Index />
          </ConditionalLayout>
        } 
      />
      <Route 
        path="/subject/:subjectId" 
        element={
          <ConditionalLayout>
            <Subject />
          </ConditionalLayout>
        } 
      />
      <Route 
        path="/subject/:subjectId/:year" 
        element={
          <ConditionalLayout>
            <YearContent />
          </ConditionalLayout>
        } 
      />
      <Route 
        path="/calculator" 
        element={
          <ConditionalLayout>
            <Calculator />
          </ConditionalLayout>
        } 
      />
      <Route 
        path="/quiz" 
        element={
          <ConditionalLayout>
            <Quiz />
          </ConditionalLayout>
        } 
      />
      <Route 
        path="/exercises" 
        element={
          <ConditionalLayout>
            <Exercises />
          </ConditionalLayout>
        } 
      />
      <Route 
        path="/search" 
        element={
          <ConditionalLayout>
            <Search />
          </ConditionalLayout>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <OnboardingProvider>
        <ChatProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ProtectedRoutes />
            </BrowserRouter>
          </TooltipProvider>
        </ChatProvider>
      </OnboardingProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
