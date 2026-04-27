import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2004",
      title: "Event Singer ",
      company: "Silvassa Navratri Festival",
      type: "9 Days Event",
      description:
        "Started performing at navratri events across Ahmedabad, delivering soulful dandiya songs 🥢 traditional performances. Built a strong connection with live audiences through energetic and emotional singing.",
    },
    {
      year: "2005",
      title: "Live Stage Performer",
      company: "London Summer Show & Navratri Festival",
      type: "30 Days Event",
      description:
        "Performed at cultural festivals and Garba nights, specializing in Gujarati and folk music. Known for engaging crowds and creating high-energy musical experiences.",
    },
    {
      year: "2006",
      title: "Professional Playback & Event Singer",
      company: "Nottingham London Mayor Celebration",
      type: "30 Days Event",
      description:
        "Worked with event companies and music groups, performing Bollywood, Bhajans, and fusion music. Gained recognition for versatile singing and consistent stage presence across multiple cities.",
    },
    {
      year: "2007",
      title: "Professional Playback & Event Singer",
      company: "BasingStoke London Hindu Temple Festival",
      type: "30 days Event",
      description:
        "Performing at international shows and private events, performing Bollywood, Bhajans, and fusion music. Representing Indian music globally. Blending traditional roots with modern styles to deliver unforgettable performances worldwide.",
    },
{
      year: "2008",
      title: "Playback & Event Singer",
      company: "Stage Share with Sanjivani Bhelande & Hiral Dave ",
      type: "3 days Live Shows Ahmedabad & Mumbai ",
      description:
        "Performed live in Ahmedabad alongside Mumbai playback singer Sanjivani Bhelande and Hiral Dave. Delivered engaging performances blending Bollywood and traditional music styles.",
    },

    {
      year: "2009",
      title: "Folk & Cultural Performer",
      company: "Live Performed with Malini Awasthi ",
      type: "Special Event Deshaj Program, Lucknow",
      description:
        "Performed at the prestigious Deshaj Program with renowned folk singer Malini Awasthi, showcasing rich Indian folk and cultural music traditions.",
    },

    {
      year: "2009-10",
      title: "International Singing Tour ",
      company: "Malaysia Tour – Kuala Lumpur & Penang",
      type: "3 Months Event",
      description:
        "Performed across multiple venues in Malaysia, including Hotel Krishna, Damansara (Kuala Lumpur). Delivered live Bollywood music performances, engaging diverse audiences with energetic and soulful singing.",
    },

     {
      year: "2010-19",
      title: "Lead Stage Performer",
      company: " All India Live 100+ Shows ",
      type: "30 days Event",
      description:
        "Worked for over a decade with Mukhtar Shah, performing across India in 100+ live shows. Gained strong recognition for versatility in Bollywood, Ghazals, and live stage performances.",
    },

     {
      year: "2017",
      title: "International Tour Performer",
      company: "USA Tour Royal Albert Palace",
      type: "30 days Event",
      description:
        "Performed during a 30-day USA tour at multiple venues including Royal Albert Palace, New Jersey. Represented Indian music internationally with powerful live performances.",
    },

    

  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>🎤︎Singing Shows </h2>
            
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-muted`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
