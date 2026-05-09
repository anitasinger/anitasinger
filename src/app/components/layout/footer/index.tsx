import Logo from "../logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <p className="text-muted-foreground">
            2026 © Made with{" "}
            <Link
              href={"#"}
              className="hover:text-black"
            >
              MarketingMens
            </Link>{" "}
            - All rights reserved by Anita Singer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
