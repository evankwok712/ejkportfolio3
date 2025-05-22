import "./.styles/globals.css";
import Image from "next/image";
import placeHolder from "@/app/.images/placeholder.png";
import fikaThumbnail from "@/app/.images/fika-thumbnail.png";
import amongstTreesThumbnail from "@/app/.images/amongst-the-trees-thumbnail.png";
import canopyThumbnail from "@/app/.images/canopy-thumbnail.png";
import tieThumbnail from "@/app/.images/to-tie-thumbnail.png";
import vesselThumbnail from "@/app/.images/vessels-thumbnail.jpg";
import mirvishThumbnail from "@/app/.images/mirvish-thumbnail.png";
import blobThumbnail from "@/app/.images/blob-thumbnail.png";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-56 pt-30 pb-20">
        <div>
          <Link href="/FIKA">
            <Image className="h-80 w-96" src={fikaThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={amongstTreesThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={blobThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={mirvishThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={canopyThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={vesselThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={tieThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={placeHolder} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={placeHolder} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={placeHolder} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-96" src={placeHolder} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-auto max-w-full rounded-lg" src={placeHolder} alt="" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
}
