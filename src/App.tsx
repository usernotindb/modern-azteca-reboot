import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { preloadCriticalImages } from "@/config/images";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Support = lazy(() => import("./pages/Support"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const SoftwareSolutionsPage = lazy(() => import("./pages/product-categories/SoftwareSolutionsPage"));
const HardwareSolutionsPage = lazy(() => import("./pages/product-categories/HardwareSolutionsPage"));
const ITServicesPage = lazy(() => import("./pages/product-categories/ITServicesPage"));
const SecuritySolutionsPage = lazy(() => import("./pages/product-categories/SecuritySolutionsPage"));

const LaptopsPage = lazy(() => import("./pages/products/Laptops"));
const ServersPage = lazy(() => import("./pages/products/Servers"));
const WorkstationsPage = lazy(() => import("./pages/products/Workstations"));

const ImageGeneratorPage = lazy(() => import("./pages/admin/ImageGeneratorPage"));

const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const AppContent = () => {
  useEffect(() => {
    // Preload critical images on app startup
    preloadCriticalImages().catch(console.error);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/products/software-solutions" element={<SoftwareSolutionsPage />} />
          <Route path="/products/hardware-solutions" element={<HardwareSolutionsPage />} />
          <Route path="/products/it-services" element={<ITServicesPage />} />
          <Route path="/products/security-solutions" element={<SecuritySolutionsPage />} />
          
          <Route path="/products/laptops" element={<LaptopsPage />} />
          <Route path="/products/servers" element={<ServersPage />} />
          <Route path="/products/workstations" element={<WorkstationsPage />} />
          
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin routes */}
          <Route path="/admin/image-generator" element={<ImageGeneratorPage />} />
          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
