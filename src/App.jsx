import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { initAnalytics } from "@/lib/analytics";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Privacy from "@/pages/Privacy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";

// Initialize GA4 (only fires after cookie consent)
initAnalytics();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Shell({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bp-bg)", color: "var(--bp-fg)" }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function ToasterRoot() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      theme={resolvedTheme === "light" ? "light" : "dark"}
      position="top-center"
      toastOptions={{
        style: {
          background: "var(--bp-bg-2)",
          color: "var(--bp-fg)",
          border: "1px solid var(--bp-border)",
          borderRadius: "2px",
        },
      }}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToasterRoot />
      <Routes>
        <Route path="/" element={<Shell><Home /></Shell>} />
        <Route path="/pricing" element={<Shell><Pricing /></Shell>} />
        <Route path="/faq" element={<Shell><FAQ /></Shell>} />
        <Route path="/contact" element={<Shell><Contact /></Shell>} />
        <Route path="/blog" element={<Shell><Blog /></Shell>} />
        <Route path="/blog/:slug" element={<Shell><BlogPost /></Shell>} />
        <Route path="/privacy" element={<Shell><Privacy /></Shell>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Shell><NotFound /></Shell>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
