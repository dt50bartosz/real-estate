import NavLink from "./nav-link";
import Image from "next/image";
import Logo from "@/public/logo.jpg"


export default function Header() {
  return (
    <section className="flex items-center justify-between p-4  text-white">
      <div className="flex items-center">
        <Image 
          src={Logo} 
          alt="Logo" 
          width={100} 
          height={100} 
          className=" w-12 h-12 sm:w-20 sm:h-20 md:w-25 md:h-20 lg:w-35 lg:h-30"
        />
        <h1 className="text-[var(--color-primary)] ml-2 text-xl font-semibold hidden sm:block"></h1>
      </div>
      
      <NavLink />
    </section>
  );
}
