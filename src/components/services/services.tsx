"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/services/CNCbanner.webp";

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-96">
        <Image
          src={banner}
          alt="CNC Services Banner"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Built on Precision. Backed by Experience.
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-6 md:px-32 py-20 gap-20 bg-white text-gray-800">
        {/* Hero Copy */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precision machining tailored to your specs — built on decades of experience and cutting-edge equipment.
          </p>
        </div>

        {/* Capabilities */}
        <div className="flex justify-center">
          <div className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-4xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Capabilities Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm md:text-base">
              <div className="flex flex-col">
                <span className="font-semibold">Max Part Size</span>
                <span>20&quot; x 35&quot; x 15&quot; Rectangular</span>
                <span>10&quot; Diameter</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Tolerances</span>
                <span>±0.0005&quot;</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Materials</span>
                <span>Aluminum, Steel, Titanium, Plastics</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Surface Finishes</span>
                <span>Anodizing, Powder Coating, Bead Blasting</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Machining Types</span>
                <span>Multi-axis CNC, Turning, Prototyping, Production</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Software</span>
                <span>Mastercam 2025</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Batch Capacity</span>
                <span>1–5,000 units</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Accepted File Types</span>
                <span>STEP, IGES, STL, DXF, PDF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Industries We Serve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              "Aerospace Components",
              "Medical Devices",
              "Manufacturing Equipment",
              "Automotive Prototypes",
              "Space Technology",
              "Defense Systems"
            ].map((item) => (
              <div key={item} className="bg-blue-50 rounded-lg py-6 px-4 shadow-sm hover:shadow-md transition">
                <p className="text-lg font-medium text-blue-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We start with a detailed conversation to understand your needs and specifications.",
              },
              {
                step: "02",
                title: "Design & CAM",
                desc: "CAD/CAM programming using Mastercam 2025 for precision and repeatability.",
              },
              {
                step: "03",
                title: "Machining",
                desc: "Parts are machined on our state-of-the-art CNC mills and lathes.",
              },
              {
                step: "04",
                title: "Quality Control",
                desc: "Every piece is inspected to meet the highest standards before delivery.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{step}</div>
                <h4 className="text-xl font-semibold mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose RG Precision Machining?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Decades of Experience",
                desc: "With over 20 years in the industry, our expertise spans across a wide range of applications.",
              },
              {
                title: "Cutting-Edge Equipment",
                desc: "We use the latest CNC technology to ensure precision and efficiency.",
              },
              {
                title: "Trusted by Industry Leaders",
                desc: "Contracted work with Boeing, NASA, Northrop Grumman, and more.",
              },
              {
                title: "Small & Large Batch Capabilities",
                desc: "From one-off prototypes to full-scale production — we scale with you.",
              },
              {
                title: "Hands-On Approach",
                desc: "We work directly with engineers, inventors, and manufacturers to bring ideas to life.",
              },
              {
                title: "American-Made Quality",
                desc: "Everything is machined in our Southern California machine shop with pride.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">{title}</h4>
                <p className="text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <Link
            href="/request-quote"
            className="bg-blue-400 inline-block text-xl font-semibold hover:bg-[#3aa0e0] transition-colors duration-200 text-white px-6 py-3 rounded-md"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
