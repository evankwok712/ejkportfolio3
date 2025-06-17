import "../.styles/globals.css";
import Image from "next/image";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import blobStruc01 from "@/app/.images/blob-01.jpg";
import blobStruc02 from "@/app/.images/blob-02.jpg";
import blobStruc03 from "@/app/.images/blob-03.jpg";
import blobStruc04 from "@/app/.images/blob-04.jpg";
import blobStruc05 from "@/app/.images/blob-05.jpg";
import blobDrawing from "@/app/.images/parametric-structure-04.png";
import blobGrasshopper from "@/app/.images/parametric-structure-grasshopper-script.png";

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
                    <p>Blob Structure</p>
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