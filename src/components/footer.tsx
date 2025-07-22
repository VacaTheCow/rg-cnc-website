import Image from "next/image";
import RGLogo from "../../public/RGLogo.png"
import Link from "next/link";
import { FaPhone, FaLocationDot, FaCalendar, FaGear } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-black w-full px-10 py-3 text-white">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-11">
    {/* Logo and Tagline */}
    <div>
      <Link href="/">
        <Image src={RGLogo} alt="RG Logo" className="w-54 h-54" />
      </Link>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-2 border-l-4 pl-2 border-blue-400">Quick Links</h3>
      <div className="flex flex-col space-y-2 text-sm mt-3">
        <Link href="/" className="text-sm flex items-center gap-2"><FaGear className="text-blue-400" />Home</Link>
        <Link href="/about" className="text-sm flex items-center gap-2"><FaGear className="text-blue-400"/>About Us</Link>
        <Link href="/services" className="text-sm flex items-center gap-2"><FaGear className="text-blue-400"/>Services</Link>
        <Link href="/contact" className="text-sm flex items-center gap-2"><FaGear className="text-blue-400"/>Contact</Link>
        <Link href="/request-quote" className="text-sm flex items-center gap-2"><FaGear className="text-blue-400"/>Request a Quote</Link>
      </div>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-semibold mb-2 border-l-4 pl-2 border-blue-400">Contact</h3>
      <div className=" space-y-2 mt-3">
        <p className="text-sm flex items-center gap-2"><FaLocationDot className="text-blue-400" /> 1108 N Arrowhead Ave, San Bernardino, CA</p>
        <p className="text-sm flex items-center gap-2"><FaCalendar className="text-blue-400"/> Mon–Fri: 8AM – 6PM</p>
        <p className="text-sm flex items-center gap-2"><MdEmail className="text-blue-400"/> lablue79@yahoo.com</p>
        <p className="text-sm flex items-center gap-2"><FaPhone className="text-blue-400"/> (909) 480-9136</p>
      </div>
    </div>

    {/* Map */}
    <div>
      <h3 className="font-semibold mb-2 border-l-4 pl-2 border-blue-400">Find Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52840.05560155285!2d-117.285676755603!3d34.133459095683634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1751680055197!5m2!1sen!2sus"
        width="100%"
        height="150"
        className="rounded-md"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>

  <div className="mt-6 text-center text-xs text-gray-400">
    &copy; {new Date().getFullYear()} RG Precision Machining. All rights reserved.
  </div>
</div>




      );
}
 
export default Footer;



