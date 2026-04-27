"use client";

import { Button } from "@/components/ui/button";
import Logo from "../logo";

const Header = () => {
  const handleDownloadPDF = () => {
    window.print();
  };
  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            <Button
              variant={"outline"}
              render={<a href="https://api.whatsapp.com/send?phone=16094146699&text=Let%27s%20Talk%20about%20your%20singing%20shows%20" target="_blank" rel="noopener noreferrer"/>}
              className="relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                Book Now
              </span>
            </Button>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;