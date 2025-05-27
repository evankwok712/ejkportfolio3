import "../.styles/globals.css";
import Image from "next/image";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import Link from "next/link";
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
            <div className="flex justify-center items-center p-4">
                <p>test</p>
            </div>
            <Footer />
        </div>
    )
}

export default FIKA;