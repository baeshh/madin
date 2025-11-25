import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Clock, Search, Navigation } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Pharmacy {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  products: string[];
}

const pharmacies: Pharmacy[] = [
  { 
    id: 1,
    name: "강남메이딘약국", 
    address: "서울 강남구 테헤란로 123 (역삼동) 강남메이딘약국",
    phone: "02-555-1234",
    hours: "09:00 - 21:00",
    region: "서울",
    city: "강남구",
    lat: 37.5012,
    lng: 127.0396,
    products: ["센시비"]
  },
  { 
    id: 8,
    name: "가고싶은서약국", 
    address: "서울 강서구 양천로 624 (화곡동) 무선빌딩 1층 가고싶은 서울약국",
    phone: "02-1234-5678",
    hours: "09:00 - 21:00",
    region: "서울",
    city: "강서구",
    lat: 37.5407,
    lng: 126.8498,
    products: ["센시비"]
  },
  { 
    id: 2,
    name: "가야온광명약국", 
    address: "경기 광명시 하안로 104번길 17 (일직동) 81206호 가야온광명약국",
    phone: "02-2222-3333",
    hours: "09:00 - 20:00",
    region: "경기",
    city: "광명시",
    lat: 37.4256,
    lng: 126.8826,
    products: ["센시비"]
  },
  { 
    id: 3,
    name: "가야온대광약국", 
    address: "경기 안양시 동안구 흥안대로 109 (관악동) 1동 별양타워파크빌 2015동 1층 가야온대광약국",
    phone: "031-1234-5678",
    hours: "09:00 - 21:00",
    region: "경기",
    city: "안양시",
    lat: 37.3943,
    lng: 126.9568,
    products: ["센시비"]
  },
  { 
    id: 4,
    name: "가야온수약국", 
    address: "경기 양평군 양평읍 안양도 225 (안암동) IC타워양거지빌딩 가야온수약국",
    phone: "031-2222-3333",
    hours: "09:00 - 20:00",
    region: "경기",
    city: "양평군",
    lat: 37.4917,
    lng: 127.4872,
    products: ["센시비"]
  },
  { 
    id: 5,
    name: "가야온약국", 
    address: "경남 김해시 가야로385번길 3855 (구산동) 가야온약국",
    phone: "055-1234-5678",
    hours: "09:00 - 21:00",
    region: "경남",
    city: "김해시",
    lat: 35.2285,
    lng: 128.8894,
    products: ["센시비"]
  },
  { 
    id: 6,
    name: "가야온약국", 
    address: "경남 거창군 거창읍 송정리 24-20 (송림리) 101동 가야온약국",
    phone: "055-2222-3333",
    hours: "09:00 - 20:00",
    region: "경남",
    city: "거창군",
    lat: 35.6869,
    lng: 127.9095,
    products: ["센시비"]
  },
  { 
    id: 7,
    name: "가야약국", 
    address: "서울 관악구 남현동 44 (봉천동) 가야약국",
    phone: "02-3333-4444",
    hours: "09:00 - 21:00",
    region: "서울",
    city: "관악구",
    lat: 37.4784,
    lng: 126.9516,
    products: ["센시비"]
  },
];

const products = [
  { id: "sensibi", name: "센시비", checked: true },
];

const regions = [
  { value: "all", label: "전국" },
  { value: "서울", label: "서울" },
  { value: "경기", label: "경기" },
  { value: "인천", label: "인천" },
  { value: "부산", label: "부산" },
  { value: "대구", label: "대구" },
  { value: "대전", label: "대전" },
  { value: "광주", label: "광주" },
  { value: "울산", label: "울산" },
  { value: "세종", label: "세종" },
  { value: "강원", label: "강원" },
  { value: "충북", label: "충북" },
  { value: "충남", label: "충남" },
  { value: "전북", label: "전북" },
  { value: "전남", label: "전남" },
  { value: "경북", label: "경북" },
  { value: "경남", label: "경남" },
  { value: "제주", label: "제주" },
];

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["센시비"]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([36.5, 127.5]);
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null);

  const cities = selectedRegion === "all" 
    ? [] 
    : Array.from(new Set(pharmacies.filter(p => p.region === selectedRegion).map(p => p.city)));

  const filteredPharmacies = pharmacies.filter(pharmacy => {
    const matchesSearch = searchTerm === "" || 
      pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = selectedRegion === "all" || pharmacy.region === selectedRegion;
    const matchesCity = selectedCity === "all" || pharmacy.city === selectedCity;
    const matchesProduct = selectedProducts.length === 0 || 
      pharmacy.products.some(p => selectedProducts.includes(p));
    
    return matchesSearch && matchesRegion && matchesCity && matchesProduct;
  });

  const handleProductToggle = (productName: string) => {
    setSelectedProducts(prev => 
      prev.includes(productName)
        ? prev.filter(p => p !== productName)
        : [...prev, productName]
    );
  };

  const handlePharmacyClick = (pharmacy: Pharmacy) => {
    setSelectedPharmacy(pharmacy);
    setMapCenter([pharmacy.lat, pharmacy.lng]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="partners"
      className="py-20 md:py-28 bg-[#f8fafc]"
      data-testid="section-partners"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#1a365d] font-medium mb-2">PHARMACY FINDER</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4"
            data-testid="text-partners-title"
          >
            제휴약국 찾기
          </h2>
          <p
            className="text-lg text-[#64748b] leading-relaxed max-w-2xl mx-auto"
            data-testid="text-partners-description"
          >
            메이딘 제품을 만나볼 수 있는 제휴약국을 찾아보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="border-[#e2e8f0] bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[400px] relative">
                  <MapContainer 
                    center={mapCenter} 
                    zoom={7} 
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapUpdater center={mapCenter} />
                    {filteredPharmacies.map((pharmacy) => (
                      <Marker 
                        key={pharmacy.id} 
                        position={[pharmacy.lat, pharmacy.lng]}
                        icon={customIcon}
                        eventHandlers={{
                          click: () => handlePharmacyClick(pharmacy)
                        }}
                      >
                        <Popup>
                          <div className="text-sm">
                            <p className="font-semibold text-[#1a365d]">{pharmacy.name}</p>
                            <p className="text-[#64748b] mt-1">{pharmacy.address}</p>
                            <p className="text-[#64748b]">{pharmacy.phone}</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>

                <div className="p-4 border-t border-[#e2e8f0] bg-[#f8fafc]">
                  <p className="text-sm font-medium text-[#1e293b] mb-3">지역별 검색</p>
                  <div className="flex flex-wrap gap-3">
                    <select
                      value={selectedRegion}
                      onChange={(e) => {
                        setSelectedRegion(e.target.value);
                        setSelectedCity("all");
                      }}
                      className="px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20"
                      data-testid="select-region"
                    >
                      {regions.map(region => (
                        <option key={region.value} value={region.value}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                    
                    {cities.length > 0 && (
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm bg-white text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20"
                        data-testid="select-city"
                      >
                        <option value="all">시/군/구</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    )}

                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="주소, 역세권 및 약국이름으로 검색하세요"
                        className="w-full px-4 py-2 border border-[#e2e8f0] rounded-lg text-sm bg-white text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20"
                        data-testid="input-pharmacy-search"
                      />
                    </div>
                    
                    <Button 
                      onClick={handleSearch}
                      className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white"
                      data-testid="button-search-pharmacy"
                    >
                      검색
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-[#e2e8f0] bg-white h-full">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-[#1e293b] mb-4">제품별 검색</p>
                <div className="space-y-3">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={product.id}
                        checked={selectedProducts.includes(product.name)}
                        onCheckedChange={() => handleProductToggle(product.name)}
                        className="border-[#1a365d] data-[state=checked]:bg-[#1a365d]"
                        data-testid={`checkbox-product-${product.id}`}
                      />
                      <label
                        htmlFor={product.id}
                        className="text-sm text-[#475569] cursor-pointer"
                      >
                        {product.name}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
                  <p className="text-xs text-[#94a3b8] mb-2">
                    검색 결과: {filteredPharmacies.length}개 약국
                  </p>
                  {selectedPharmacy && (
                    <div className="p-4 bg-[#f8fafc] rounded-lg" data-testid="pharmacy-details">
                      <p className="font-semibold text-[#1a365d] mb-2">
                        {selectedPharmacy.name}
                      </p>
                      <div className="space-y-2 text-sm text-[#64748b]">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{selectedPharmacy.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span>{selectedPharmacy.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span>{selectedPharmacy.hours}</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full mt-3 text-[#1a365d] border-[#1a365d]"
                        onClick={() => {
                          window.open(
                            `https://map.naver.com/v5/search/${encodeURIComponent(selectedPharmacy.address)}`,
                            "_blank"
                          );
                        }}
                        data-testid="button-naver-map"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        네이버 지도에서 보기
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-[#e2e8f0] bg-white">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="table-pharmacies">
                <thead>
                  <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#1e293b]">약국명</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#1e293b]">주소</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPharmacies.length > 0 ? (
                    filteredPharmacies.map((pharmacy) => (
                      <tr 
                        key={pharmacy.id} 
                        className={`border-b border-[#e2e8f0] hover:bg-[#f8fafc] cursor-pointer transition-colors ${
                          selectedPharmacy?.id === pharmacy.id ? "bg-[#1a365d]/5" : ""
                        }`}
                        onClick={() => handlePharmacyClick(pharmacy)}
                        data-testid={`row-pharmacy-${pharmacy.id}`}
                      >
                        <td className="py-4 px-6 text-sm text-[#1a365d] font-medium">
                          {pharmacy.name}
                        </td>
                        <td className="py-4 px-6 text-sm text-[#64748b]">
                          {pharmacy.address}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="py-8 text-center text-[#64748b]">
                        검색 조건에 맞는 약국이 없습니다.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-[#64748b] mb-4">
            제휴약국 입점을 원하시나요?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="bg-[#1a365d] hover:bg-[#2d4a7c]"
            data-testid="link-contact-partners"
          >
            입점 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
