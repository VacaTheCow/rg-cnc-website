"use client";
import React from "react";
import Image from "next/image";

const partners = [
  { name: "Boeing", src: "/home/partners/BoeingLogo.png" },
  { name: "NASA", src: "/home/partners/NASALogo.png" },
  { name: "AST SpaceMobile", src: "/home/partners/ASTSpaceMobileLogo.png" },
  { name: "K2 Space", src: "/home/partners/K2SpaceLogo.webp" },
  { name: "Northrop Grumman", src: "/home/partners/NorthropGrumanLogo.png" },
];

const PartnersBanner: React.FC = () => {
  return (
    <div className="w-full py-6 px-4">
      <h1 className="text-center text-2xl font-semibold mb-4">
        Trusted by Industry Leaders
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-24 border-b-4 border-blue-400 py-3">
        {partners.map((partner) => (
          <div key={partner.name} className="w-40 h-20 relative">
            <Image
              src={partner.src}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersBanner;
