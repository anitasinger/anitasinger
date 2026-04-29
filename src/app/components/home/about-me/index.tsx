import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-muted py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src="/images/home/about-me/singer-bg-img.svg"
            alt="singer-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src="/images/home/about-me/about-banner-img4.svg"
                  alt="about-banner"
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  With over two decades of experience, this artist has built a powerful musical journey that began in Rajasthan and flourished in Ahmedabad. Known for captivating performances and a versatile voice, she has performed for audiences worldwide, blending tradition with modern expression.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-gray-300">
                  {[
                    { count: "20+", label: "Years of experience" },
                    { count: "165+", label: "Live Shows" },
                    { count: "1800+", label: "Hours Stage Performed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Hindi</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["Gujrati", "Marwari", "Bhajans"].map((lang, index) => (
                      <Badge key={index} className="h-full bg-white rounded-full">
                        <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 text-base xl:text-xl text-muted-foreground">
                          {lang}
                        </p>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
