import "@/app/globals.css";
import Image from "next/image";
import portfolioImage from "@/app/images/FAINSDLFKAS-09.png";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-64 pt-10 pb-20">
        <div>
          <Link href="/fikaplan">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
        <div>
          <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
        </div>
      </div>
      <Footer />
    </div>

  );
}
