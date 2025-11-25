import { BRAND, COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white" data-testid="footer-main">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-3">
              {BRAND.nameEn}
            </div>
            <p className="text-sm text-white/80 mb-4 max-w-md">
              {BRAND.slogan}
            </p>
            <p className="text-xs text-white/60">
              {BRAND.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">회사 정보</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div>대표: {COMPANY_INFO.ceo}</div>
              <div>설립: {COMPANY_INFO.established}년</div>
              <div>
                사업자등록번호: {COMPANY_INFO.businessNumber}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">연락처</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div>{COMPANY_INFO.phone}</div>
              <div>{COMPANY_INFO.email}</div>
              <div className="text-xs pt-1">{COMPANY_INFO.address}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => alert("이용약관은 준비 중입니다")}
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-terms"
              aria-label="이용약관"
            >
              이용약관
            </button>
            <button
              onClick={() => alert("개인정보처리방침은 준비 중입니다")}
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-privacy"
              aria-label="개인정보처리방침"
            >
              개인정보처리방침
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
