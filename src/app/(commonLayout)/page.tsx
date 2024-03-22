import Categories from "@/components/UI/Home/Categories";
import FlashSale from "@/components/UI/Home/FlashSale";
import HeroSection from "@/components/UI/Home/HeroSection";
import Trending from "@/components/UI/Home/Trending";

const HomePage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <HeroSection />
      <FlashSale />
      <Categories />
      <Trending />
    </div>
  );
};

export default HomePage;
