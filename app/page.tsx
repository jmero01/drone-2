import Banner from "@/components/banner/Banner";
import { HeroPage } from "@/components/heroPage/Hero";
import { ProductList } from "@/components/products/ProductList";
import media from "@/data/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroPage/>
      <ProductList media = {media}/>
      <Banner/>
    </main>
  )
}
