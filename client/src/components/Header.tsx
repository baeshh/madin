import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, BRAND, HEADER_LINKS } from "@/lib/constants";
import { Menu, X, User, ExternalLink } from "lucide-react";
import logoImg from "@assets/image_1764053910778.png";

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
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
      data-testid="header-main"
    >
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
              data-testid="button-logo"
              aria-label="메이딘 홈으로 이동"
            >
              <img 
                src={logoImg} 
                alt={BRAND.nameEn}
                className="h-8 lg:h-10 w-auto"
              />
            </button>

            <nav className="hidden lg:flex items-center" aria-label="주요 메뉴">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-[#1a365d] transition-colors relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-px after:bg-gray-200"
                  data-testid={`link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={HEADER_LINKS.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-[#1a365d] transition-colors"
                data-testid="link-contact"
              >
                상담문의
              </a>
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href={HEADER_LINKS.login}
                className="text-sm text-gray-600 hover:text-[#1a365d] transition-colors px-3 py-2"
                data-testid="link-login"
              >
                로그인
              </a>
              <span className="text-gray-300">|</span>
              <a
                href={HEADER_LINKS.register}
                className="text-sm text-gray-600 hover:text-[#1a365d] transition-colors px-3 py-2"
                data-testid="link-register"
              >
                회원가입
              </a>
              <a
                href={HEADER_LINKS.pharmacistMall}
                className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a365d] text-white text-sm font-medium rounded hover:bg-[#2d4a7c] transition-colors"
                data-testid="link-pharmacist-mall"
              >
                약사전용몰
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="button-mobile-menu"
              aria-label="모바일 메뉴"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="lg:hidden bg-white border-b border-gray-100 shadow-lg"
          aria-label="모바일 메뉴"
        >
          <div className="container mx-auto px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1a365d] rounded-md transition-colors"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={HEADER_LINKS.kakaoChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1a365d] rounded-md transition-colors"
              data-testid="link-mobile-contact"
            >
              상담문의
            </a>
            
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <div className="flex items-center gap-4 px-4">
                <a
                  href={HEADER_LINKS.login}
                  className="text-sm text-gray-600 hover:text-[#1a365d]"
                  data-testid="link-mobile-login"
                >
                  로그인
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={HEADER_LINKS.register}
                  className="text-sm text-gray-600 hover:text-[#1a365d]"
                  data-testid="link-mobile-register"
                >
                  회원가입
                </a>
              </div>
              <a
                href={HEADER_LINKS.pharmacistMall}
                className="mx-4 flex items-center justify-center gap-1.5 px-4 py-3 bg-[#1a365d] text-white text-sm font-medium rounded hover:bg-[#2d4a7c] transition-colors"
                data-testid="link-mobile-pharmacist-mall"
              >
                약사전용몰
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
