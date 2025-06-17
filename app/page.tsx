import "./.styles/globals.css";
import Image from "next/image";
import placeHolder from "@/app/.thumbnails/placeholder.png";
import fikaThumbnail from "@/app/.thumbnails/fika-thumbnail.png";
import amongstTreesThumbnail from "@/app/.thumbnails/amongst-the-trees-thumbnail.png";
import canopyThumbnail from "@/app/.thumbnails/canopy-thumbnail.png";
import tieThumbnail from "@/app/.thumbnails/tie-thumbnail.png";
import vesselThumbnail from "@/app/.thumbnails/vessels-thumbnail.jpg";
import mirvishThumbnail from "@/app/.thumbnails/mirvish-thumbnail.png";
import blobThumbnail from "@/app/.thumbnails/blob-thumbnail.png";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center pt-30 px-60">
        <p>Hi! Welcome to my website. Please excuse its appearance while I build it :)</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-60 pt-30 pb-30">
        <div>
          <Link href="/FIKA">
            <Image className="h-80 w-80" src={fikaThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/amongst-the-trees">
            <Image className="h-80 w-80" src={amongstTreesThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/blob-complex">
            <Image className="h-80 w-80" src={blobThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/bloor-st-enhancement">
            <Image className="h-80 w-80" src={mirvishThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/in-the-canopy">
            <Image className="h-80 w-80" src={canopyThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/to-tie">
            <Image className="h-80 w-80" src={tieThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/vessels-and-their-contents">
            <Image className="h-80 w-80" src={vesselThumbnail} alt="" />
          </Link>
        </div>
        <div>
          <Link href="/film-gallery">
            <Image className="h-80 w-80" src={placeHolder} alt="" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
}
