import "../.styles/globals.css";
import Image from "next/image";
import Navbar from "@/app/.components/navbar";
import Footer from "@/app/.components/footer";
import amongstTrees01 from "@/app/.images/amongst-trees-01.png";
import amongstTrees02 from "@/app/.images/amongst-trees-02.png";
import amongstTrees03 from "@/app/.images/amongst-trees-03.png";
import amongstTrees04 from "@/app/.images/amongst-trees-04.png";
import amongstTrees05 from "@/app/.images/amongst-trees-05.jpg";

const AmongstTrees: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-30 px-60">
                <div>
                    <p>Amongst the Trees</p>
                    <p>How to Design Almost Anything</p>
                    <p>Spring 2024, Studio</p>
                    <br />
                    <p>Site: Queen's Park</p>
                </div>
                <div>
                    <p>Project Brief</p>
                    <br />
                    <p>Informed by Queens Park's historical conflict between its character as a site for political activity and 
                        a site for relaxation, in large part due to the imposing presence of the Ontario Legislative Building, this 
                        proposal aims to support the usage of the park as a space for mental repose, tranquility and calmness. Users 
                        are encouraged to engage in quiet, intimate conversations with themselves, or in small numbers, enhanced by 
                        the intervention's separation from the surrounding urban environment.</p>
                    <p>Form</p>
                    <br />
                    <p>This proposal aims to emulate the density of a natural forest amongst the existing flat topography through the 
                        introduction of pollinator-friendly shrubbery.</p>
                    <p>Programmatic Rationale</p>
                    <br />
                    <p>The organization of the interior space is a distillation of typographic characteristics observed through the 
                        study of existing listening rooms. Depending on the intended purpose of the space, different forms of furniture 
                        can be installed to enhance its usage as a conversational, personal, or ampitheatrical space.</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mx-60">
                <p className="inline-flex">
                    <Image className="max-w-full " src={amongstTrees01} alt="" />
                </p>
            </div>
            <div className="flex flex-row items-center justify-center mx-60">
                <p className="inline-flex">
                    <Image className="max-w-full " src={amongstTrees03} alt="" />
                </p>
            </div>
            <div className="py-10 px-60">
                <p>A second module is proposed in order to provide a greater sensorial experience. Utilizing a similar design language 
                    to the first intervention, the columns in this intervention are instead made of thin aluminum pipes which are intended 
                    to create musical sounds when struck. Combined with the fragrant scents of flowering bushes, these columns, scattered 
                    randomly and at different heights throughout the module, would create an interactive sensory garden. </p>
            </div>
            <div className="flex flex-row items-center justify-center mx-60">
                <p className="inline-flex">
                    <Image className="max-w-full " src={amongstTrees02} alt="" />
                </p>
            </div>
            <div className="flex flex-row items-center justify-center mx-60">
                <p className="inline-flex">
                    <Image className="max-w-full " src={amongstTrees04} alt="" />
                </p>
            </div>
            <div className="py-10 px-60">
                <p>The proposed interventions are to be scattered intentionally into quiet, empty areas around the park, enhancing their 
                    usages as sites of relaxation and acting as pockets of quiet space.</p>
            </div>
            <div className="flex flex-row items-center justify-center mx-60">
                <p className="inline-flex">
                    <Image className="max-w-full " src={amongstTrees05} alt="" />
                </p>
            </div>
            <div className="py-10 px-60">
                <p>This intervention can be proposed for parks across Toronto, unifying its green spaces under a single common design 
                    language. However, further individual site studies must be conducted to ensure the appropriateness of such an 
                    intervention across various parks and their unique cultural environments.  Various modules can feature circular 
                    labyrinthine paths, larger sunken spaces, or smaller single-person areas. </p>
            </div>
            <Footer />
        </div>
    )
}

export default AmongstTrees;