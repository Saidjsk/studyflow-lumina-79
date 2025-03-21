
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Subject from "./pages/Subject";
import YearContent from "./pages/YearContent";
import Calculator from "./pages/Calculator";
import Quiz from "./pages/Quiz";
import Exercises from "./pages/Exercises";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/subject/:subjectId" element={<Subject />} />
              <Route path="/subject/:subjectId/:year" element={<YearContent />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
