"use client";

import Image from "next/image";
import shopImage from "../../../public/about/cncShop.webp"; // Replace with a good shop or team image
import banner from "../../../public/about/aboutBanner.webp"; // Optional hero image
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-96">
        <Image
          src={banner}
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Built on Precision. Backed by Experience.
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-6 md:px-32 py-20 gap-20 bg-white text-gray-800">
        {/* Our Story */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Our Story</h2>
          <p className="text-lg leading-relaxed max-w-4xl">
            Founded by a master machinist with over 30 years of hands-on experience, RG Precision
            Machining is a family-run business rooted in craftsmanship, integrity, and innovation.
            We’ve proudly delivered complex components for the aerospace, medical, automotive,
            and manufacturing industries — all from our facility in Southern California.
          </p>
        </section>

        {/* Our Values */}
        <section className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Craftsmanship</h3>
            <p>
              Every part we make is a reflection of our dedication to detail, function, and finish.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Transparency</h3>
            <p>
              Clear communication and honest timelines are at the core of every project.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Precision</h3>
            <p>
              Whether it&apos;s a one-off prototype or a high-volume run, we never compromise on accuracy.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={shopImage}
              alt="RG Shop"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-500">Why Choose RG Precision?</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>30+ years of hands-on machining experience</li>
              <li>Trusted by companies like Boeing, NASA, and K2 Space</li>
              <li>State-of-the-art CNC equipment and inspection tools</li>
              <li>Small enough to care, large enough to deliver</li>
              <li>Proudly based in San Bernardino, CA</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Let’s Build Something Great Together</h3>
          <Link
            href="/contact"
            className="inline-block bg-blue-400 text-xl font-semibold hover:bg-[#3aa0e0] transition-colors duration-200 px-6 py-3 rounded-md text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
