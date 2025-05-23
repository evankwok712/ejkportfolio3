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
            <div className="py-20 grid grid-cols-1 gap-6 sm:grid-cols-3 mx-2">
                <p className="mb-3 text-gray-500 dark:text-gray-400">one</p>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                    <Image className="h-80 w-80" src={fikaSection} alt="" />
                </p>
                <p className="mb-3 text-gray-500 dark:text-gray-400">three</p>
            </div>
            <Footer />
        </div>
    )
}

export default FIKA;