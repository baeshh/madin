import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RnD from "@/components/RnD";
import Product from "@/components/Product";
import Certifications from "@/components/Certifications";
import Partners from "@/components/Partners";
import News from "@/components/News";
import Footer from "@/components/Footer";
import { SEO } from "@/lib/seo";
import ogImage from "@assets/generated_images/OG_social_preview_1af0bea4.png";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />

        <meta property="og:title" content={SEO.ogTitle} />
        <meta property="og:description" content={SEO.ogDescription} />
        <meta property="og:type" content={SEO.ogType} />
        <meta property="og:url" content={SEO.ogUrl} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content={SEO.twitterCard} />
        <meta name="twitter:title" content={SEO.twitterTitle} />
        <meta name="twitter:description" content={SEO.twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <RnD />
          <Product />
          <Certifications />
          <Partners />
          <News />
        </main>
        <Footer />
      </div>
    </>
  );
}
