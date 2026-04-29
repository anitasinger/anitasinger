import { NextResponse } from "next/server";

const workData = [
    {
        image: "/images/work/work-img-7.jpg",
        title: "Mera Bhola He Bhandari",
        client: "India",
        slug: "https://www.youtube.com/watch?v=3mYAd3V80qA"
    },
    {
        image: "/images/work/work-img-8.jpg",
        title: "Gujarati Song",
        client: "Natwar Thakurji",
        slug: "https://www.youtube.com/watch?v=AAs17y0HHns"
    },
    {
        image: "/images/work/work-img-9.jpg",
        title: "Ye Samaa Samaa Hai Pyar Ka",
        client: "Aawaz Academy",
        slug: "https://www.youtube.com/watch?v=_fHkeFcX87c"
    },
    {
        image: "/images/work/work-img-14.jpg",
        title: "Jaane Ja Jane Ja",
        client: "USA Tour",
        slug: "https://www.youtube.com/shorts/cfEHJPhwEZc"
    },
    {
        image: "/images/work/work-img-11.jpg",
        title: "Dil Hai ke Manta Nahi",
        client: "Anuradha Paudwal",
        slug: "https://www.youtube.com/watch?v=V-CrlmTl1EQ"
    },
    {
        image: "/images/work/work-img-13.jpg",
        title: "Koi Dijo Dijo Bira ne Sandesh",
        client: "Own Portfolio",
        slug: "https://www.youtube.com/watch?v=F_FHtSmHrP4"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
