import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, BRAND } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors"
            data-testid="button-logo"
            aria-label="메이딘 홈으로 이동"
          >
            {BRAND.nameEn}
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="주요 메뉴">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex"
            data-testid="button-contact-cta"
          >
            제휴·납품 문의
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
            aria-label="모바일 메뉴"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-border"
            aria-label="모바일 메뉴"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 hover-elevate active-elevate-2 rounded-md text-foreground"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
                data-testid="button-mobile-contact-cta"
              >
                제휴·납품 문의
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
