import Image from "next/image";
import Screws from "../../../public/home/millingCutters.jpg"
import Link from "next/link";

const homeAbout = () => {
    return ( 
        <div className="w-full flex flex-row p-10 mt-4">
            <div className="w-1/2 p-20 mt-7 space-x-5">
                <h1 className="border-l-8 pl-2 border-blue-400"> What We Do</h1>
                <p>We specialize in CNC milling, turning, and custom fabrication for industries that demand precision. 
                    From tight-tolerance prototypes to scalable production parts, we work with aluminum, steel, plastics, and more. 
                    Our commitment to quality craftsmanship and reliable lead times is what sets us apart.</p>

                    <Link href="/about" className="text-center p-2 bg-blue-400 text-white font-semibold rounded-3xl hover:bg-blue-500 transition-colors duration-200 w-28">
                        Learn More
                    </Link>
                    <Link href="/services" className=" text-center p-2 bg-blue-400 text-white font-semibold rounded-3xl hover:bg-blue-500 transition-colors duration-200 w-28">
                        Services
                    </Link>
            </div>

            <Image 
            className="w-1/2 rounded-md border-blue-400 border-8 m-12 drop-shadow-xl/50 drop-shadow-blue-400/100"
            src={Screws}
            alt="Milling Image"
            />
        </div>
     );
}
 
export default homeAbout;