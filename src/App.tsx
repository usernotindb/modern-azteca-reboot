
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import SoftwareSolutionsPage from "./pages/product-categories/SoftwareSolutionsPage";
import HardwareSolutionsPage from "./pages/product-categories/HardwareSolutionsPage";
import ITServicesPage from "./pages/product-categories/ITServicesPage";
import SecuritySolutionsPage from "./pages/product-categories/SecuritySolutionsPage";

import LaptopsPage from "./pages/products/Laptops";
import ServersPage from "./pages/products/Servers";
import WorkstationsPage from "./pages/products/Workstations";

import ImageGeneratorPage from "./pages/admin/ImageGeneratorPage";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
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
            
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin routes */}
            <Route path="/admin/image-generator" element={<ImageGeneratorPage />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
