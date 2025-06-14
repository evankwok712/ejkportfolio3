import "../.styles/globals.css";
import Image from "next/image";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import blobStruc01 from "@/app/.images/blob-01.jpg";

const BlobComplex: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="flex flex-row items-center justify-center">
                <p className="inline-flex">
                    <Image className="max-w-full " src={blobStruc01} alt="" />
                </p>
            </div>
            <div className="pb-30 px-40 py-10">
                <div>
                    <p>FIKA Cafe</p>
                    <p>Drawing Exercise</p>
                    <p>2023</p>
                    <br />
                </div>
                <div>
                    <p>28 Kensington Avenue</p>
                    <p>Section Perspective, drawn in Rhino3D and Adobe Illustrator</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlobComplex;