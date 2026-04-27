import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "hi@anitasigner.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hi@anitasigner.com"
    },
    {
      type: "phone",
      label: "+1 609 414 6699",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+16094146699"
    },
    {
      type: "website",
      label: "www.anitasigner.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://www.anitasigner.com"
    }
  ],
  socialItems: [
    {
      platform: "Youtube",
      icon: "/images/icon/youtube-icon.png",
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
      title: "London Tour with Bali Brahmbhatt",
      description: "Collaborated in a special playback performance at Buckingham Palace with Bali Brahmbhatt, showcasing Indian music on a prestigious stage."
    }
  ],
  skills: [
    {
      name: "Summer Show",
      icon: "/images/home/education-skill/show-icon.svg",
      rating: 5
    },
    {
      name: "Albany Hall",
      icon: "/images/home/education-skill/albany.svg",
      rating: 5
    },
    {
      name: "Lyca Radio",
      icon: "/images/home/education-skill/show-icon-2.png",
      rating: 4
    },
    {
      name: "Royal Albert Palace",
      icon: "/images/home/education-skill/royal-albert-palace.avif",
      rating: 4
    },
    {
      name: "Basingstoke Society",
      icon: "/images/home/education-skill/basingstoke.png",
      rating: 5
    },
    {
      name: "Nottingham City",
      icon: "/images/home/education-skill/Nottingham_City_Council_logo.svg",
      rating: 4
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
      label: "hi@anitasigner.com",
      link: "mailto:hi@anitasigner.com"
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
