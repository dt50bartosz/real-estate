import Hero from "@/componet/index/hero";
import AboutMe from "@/componet/about-me/about-me";
import WhyMe from "@/componet/why-me/why-me";
import Reviews from "@/componet/reviews/reviews";

// Metadata for the Home page
export const metadata = {
  title: "Home | DreamSpace Real Estate",
  description: "Find your perfect home with DreamSpace Real Estate. Browse listings, explore neighborhoods, and connect with trusted agents.",
  openGraph: {
    titlecc: "Home | Nieruchomości w Słońcu",
    description: "Find your perfect home with DreamSpace Real Estate. Browse listings, explore neighborhoods, and connect with trusted agents.",
    url: "https://dreamspace.com", // Replace with your actual domain
    siteName: "Nieruchomości w Słońcu",
    images: [
      {
        url: "", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Modern home listed on DreamSpace Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <WhyMe />
      <Reviews />
    </>
  );
}
