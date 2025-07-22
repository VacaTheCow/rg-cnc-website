"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import banner from "../../../public/contact/cncContactBanner.webp";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-96">
        <Image
          src={banner}
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Let’s Build Something Great Together
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col px-6 md:px-32 py-20 gap-20 bg-white text-gray-800">
        {/* Contact Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-500">Contact Information</h2>
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500" />
              <span className="text-lg">(909) 480-9136</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500" />
              <span className="text-lg">lablue79@yahoo.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaClock className="text-blue-500" />
              <span className="text-lg">Mon–Fri: 8:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span className="text-lg">
                1108 N Arrowhead Ave, <br /> San Bernardino, CA 92410
              </span>
            </div>
          </div>

          {/* Google Map Embed (optional) */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.146795087253!2d-117.29245228478185!3d34.124316620393264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3538143e57421%3A0xb9b5a7593c0b9b4a!2s1108%20N%20Arrowhead%20Ave%2C%20San%20Bernardino%2C%20CA%2092410!5e0!3m2!1sen!2sus!4v1698899909900!5m2!1sen!2sus"
              width="100%"
              height="350"
              loading="lazy"
              className="border-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/request-quote"
            className="inline-block text-xl font-semibold bg-blue-400 hover:bg-[#3aa0e0] transition-colors duration-200 text-white px-6 py-3 rounded-md"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
