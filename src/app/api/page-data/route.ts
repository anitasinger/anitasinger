import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "hi@anitasigner.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "+1 609 414 6699",
      icon: "/images/icon/call-icon.svg",
      link: "tel:++16094146699"
    },
    {
      type: "website",
      label: "www.anitasigner.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://www.mywebsite.com"
    }
  ],
  socialItems: [
    {
      platform: "Youtube",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://www.youtube.com/@anitajoshisongs3012/videos"
    },
    {
      platform: "Instagram",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.instagram.com/singer_anita_joshi_official/"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://www.facebook.com/p/Anita-joshi-singer-100069831814767/"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "My 1st UK Tour",
      description: "Featured in Summer Show and Navratri events, delivering vibrant Gujarati and folk music performances at cultural festivals."
    },
    {
      title: "Nottingham Tour",
      description: "Showcased live singing at a mayoral function and prestigious events across Nottingham, bringing Gujarati vibes and folk music to elite audiences."
    },
    {
      title: "Stage Share with Bali Brahmbhatt",
      description: "Collaborated in a special playback performance at Buckingham Palace with Bali Brahmbhatt, showcasing Indian music on a prestigious stage."
    }
  ],
  skills: [
    {
      name: "Figma",
      icon: "/images/home/education-skill/figma-icon.svg",
      rating: 5
    },
    {
      name: "Photoshop",
      icon: "/images/home/education-skill/photoshop-icon.svg",
      rating: 5
    },
    {
      name: "Sketch",
      icon: "/images/home/education-skill/sketch-icon.svg",
      rating: 4
    },
    {
      name: "Adobe XD",
      icon: "/images/home/education-skill/adobe-icon.svg",
      rating: 4
    },
    {
      name: "Framer",
      icon: "/images/home/education-skill/framer-icon.svg",
      rating: 5
    },
    {
      name: "Invasion",
      icon: "/images/home/education-skill/invision-icon.svg",
      rating: 3
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Youtube",
      href: "https://www.youtube.com/@anitajoshisongs3012/videos"
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/p/Anita-joshi-singer-100069831814767/"
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/singer_anita_joshi_official/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "hi@anitasigner.com.",
      link: "mailto:hi@anitasigner.com."
    },
    {
      type: "phone",
      label: "+1 609 414 6699",
      link: "tel:+16094146699"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
