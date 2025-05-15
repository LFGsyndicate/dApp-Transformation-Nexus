
import { ThemeProvider } from "./hooks/useTheme";
import { LanguageProvider } from "./hooks/useLanguage";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TechnologiesPage from "./pages/TechnologiesPage";
import UseCasesPage from "./pages/UseCasesPage";
import ConclusionsPage from "./pages/ConclusionsPage";
import AboutPage from "./pages/AboutPage";
import TechnologyDetailPage from "./pages/TechnologyDetailPage";
import ResearchPapersPage from "./pages/ResearchPapersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use HashRouter instead of BrowserRouter for GitHub Pages compatibility
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/technologies/:techId" element={<TechnologyDetailPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/research-papers" element={<ResearchPapersPage />} />
              <Route path="/conclusions" element={<ConclusionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
