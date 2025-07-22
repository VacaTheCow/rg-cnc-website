import Image from "next/image";
import millingImage from "../../../public/home/services/milling.png";
import latheImage from "../../../public/home/services/lathe.png";
import engineerImage from "../../../public/home/services/engineer.png";
import productionImage from "../../../public/home/services/production.png";

const HomeServices = () => {
  return (
    <div className="w-full flex flex-col md:px-80 px-6 py-20 gap-10 bg-white">
      {/* CNC Milling */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={millingImage}
            alt="CNC Milling"
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3">
          <h3 className="text-3xl font-bold border-l-8 pl-2 border-blue-400">CNC Milling</h3>
          <p className="text-lg">
            High-precision CNC milling for complex parts and components. We work with aluminum,
            steel, titanium, and more to deliver consistent accuracy and tight tolerances.
          </p>
        </div>
      </div>

      {/* CNC Turning */}
      <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={latheImage}
            alt="CNC Turning"
            className="w-full h-auto rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3">
          <h3 className="text-3xl font-bold border-l-8 pl-2 border-blue-400">CNC Turning</h3>
          <p className="text-lg">
            Expert CNC turning services for cylindrical parts. We provide rapid prototyping
            and full production runs with outstanding finish quality.
          </p>
        </div>
      </div>

      {/* CNC Production */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={productionImage}
            alt="CNC Turning"
            className="w-full h-auto rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3">
          <h3 className="text-3xl font-bold border-l-8 pl-2 border-blue-400">Production</h3>
          <p className="text-lg">
            Reliable CNC production for short, medium, or large part runs. We ensure consistency,
            repeatability, and tight quality control — whether it&apos;s ten parts or ten thousand.
          </p>
        </div>
      </div>

      {/* Prototyping */}
      <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={engineerImage}
            alt="Prototyping"
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3">
          <h3 className="text-3xl font-bold border-l-8 pl-2 border-blue-400">Prototyping</h3>
          <p className="text-lg">
            From concept to component, we help engineers bring their prototypes to life.
            Quick turnarounds with attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;