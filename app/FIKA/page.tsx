import "../.styles/globals.css";
import Image from "next/image";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import fikaSection from "@/app/.images/fika-section-perspective.png";

const FIKA: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="flex flex-row items-center justify-center">
                <p className="inline-flex">
                    <Image className="max-w-full " src={fikaSection} alt="" />
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

export default FIKA;