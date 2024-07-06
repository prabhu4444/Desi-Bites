import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Curbing your cravings,<br />
          one bite at a time<br />
          <span className="text-primary">
            Desi Bites
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
        Desi Bites is the missing piece that makes every meal complete, bringing the vibrant and flavorful joy of Indian cuisine to your table.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative  hidden md:block">
        <Image className="ml-12 mt-12 rounded" src={'/desi_bites_logo.png'} layout={'intrinsic'} width={400} 
      height={400}  objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}