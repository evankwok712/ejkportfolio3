import "./.styles/globals.css";
import Image from "next/image";
import portfolioImage from "@/app/.images/FAINSDLFKAS-09.png";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-64 pt-10 pb-20">
        <div>
          <Link href="/FIKA">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={portfolioImage} alt="" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
}
