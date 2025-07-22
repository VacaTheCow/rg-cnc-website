import HomeLanding from "@/components/home/homeLanding";
import HomeAbout from "@/components/home/homeAbout";
import PartnerBanner from "@/components/home/partnersBanner";
import HomeServices from "@/components/home/homeServices";

export default function Home() {
  return (
    <div className="bg-white">
      <HomeLanding />
      <HomeAbout />
      <PartnerBanner />
      <HomeServices />
    </div>
  );
}
