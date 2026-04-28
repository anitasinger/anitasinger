import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2003-10",
      title: "Lead Stage Singer",
      company: "All India Live 50+ Shows",
      type: "All Time Singing Shows",
      description:
        "Worked for over a decade with Mukhtar Shah, Varsha Kulkarni, Jaykar Bhojak, and many more, performing across India in 50+ live shows. Gained recognition in the Gujarat region and throughout India for live stage performances.",
    },
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
      company: "UK Summer Show with Arun Patel",
      type: "3 Months Tour",
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
      company: "BasingStoke Tour with Sunil Patel",
      type: "00 days Event",
      description:
        "Performed at the Basingstoke London Hindu Temple International Festival and private events, performing Bollywood and Navratri specials. Represented Indian music globally as the Gujju Rockstar.",
    },

    {
      year: "2007-09",
      title: "Live Stage Singer",
      company: "Moved to India for selected shows.",
      type: "Special Events All over India",
      description:
        "Performed live throughout India alongside Mumbai playback singers Anwar Hussain, Sanjivani Bhelande, Hiral Dave, Malini Awasthi and many more.",
    },

    {
      year: "2007",
      title: "Women Singer",
      company: "Shared the Stage with Anwar Hussain",
      type: "3 days Live Shows",
      description:
        "Performed live in Mumbai and Ahmedabad with Anwar Hussain. Gained strong recognition for versatility and live stage performances all over India.",
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
      title: "International Singing Tour ",
      company: "Malaysia Tour – Kuala Lumpur, Damansara",
      type: "3 Months Event",
      description:
        "Performed across multiple venues in Malaysia, including Hotel Krishna, Damansara (Kuala Lumpur). Delivered live Bollywood music performances, engaging diverse audiences with energetic and soulful singing.",
    },

    {
      year: "2009",
      title: "International Singing USA Tour",
      company: "Dallas Tour with Sunny Patel",
      type: "3 Months Event",
      description:
        "Performed across multiple venues in Texas, including Dallas city. Delivered live Bollywood live singing performances on live stages.",
    },

     {
      year: "2010–15",
      title: "London Special Shows",
      company: " Collaborated with Bali Brahmbhatt ",
      type: "Performed across the UK for five years",
      description:
        "Shared the stage with Bali Brahmbhatt, performing across the United Kingdom in 30+ live shows. Gained strong recognition for versatility and live stage performances.",
    },
 {
      year: "2013",
      title: "Special Event Piccadilly Circus",
      company: " Performed in front of Queen Elizabeth II ",
      type: "30 Days Event",
      description:
        "Performed at a prestigious event at Piccadilly Circus with renowned singer Bali Brahmbhatt, showcasing rich Indian folk and cultural music traditions.",
    },

     {
      year: "2017",
      title: "Special Event in New Jersey",
      company: "USA Tour with Raj Bhati",
      type: "60 days Event",
      description:
        "Performed during a USA tour with Raj Bhati, including venues like Royal Albert Hall and New Jersey. Represented Indian music internationally with powerful live performances.",
    },

{
      year: "2018",
      title: "Special Events in Atlanta",
      company: "Stage share with Kamru Singer",
      type: "45 Days Tour",
      description:
        "Performed at the prestigious event at Atlanta with renowned singer Kamru singer, showcasing rich Indian folk and cultural music traditions.",
    },

{
      year: "2018-24",
      title: "Moved to India",
      company: "All India Singing Shows",
      type: "Special Events All Over India",
      description:
        "Performed throughout India with renowned folk singers, showcasing rich Indian folk and cultural music traditions. Primarily performed in Navratri shows.",
    },

    {
      year: "2021",
      title: "Folk & Cultural Performer",
      company: "Live Performed with Malini Awasthi ",
      type: "Special Event Deshaj Program, Lucknow",
      description:
        "Performed at the prestigious Deshaj Program with renowned folk singer Malini Awasthi, showcasing rich Indian folk and cultural music traditions.",
    },
 {
      year: "2025",
      title: "Cultural & Bollywod Singer",
      company: "Moved to USA ",
      type: "Performed shows around the USA.",
      description:
        "Started performing once again, showcasing rich Indian folk and cultural music traditions.",
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
