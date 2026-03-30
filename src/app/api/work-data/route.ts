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
        image: "/images/work/work-img-10.jpg",
        title: "Pehla Nasha Pehla Khumar",
        client: "Sadhana Sargam",
        slug: "https://www.youtube.com/watch?v=-nxsfGb6QUk"
    },
    {
        image: "/images/work/work-img-11.jpg",
        title: "Dil Hai ke Manta Nahi",
        client: "Anuradha Paudwal",
        slug: "https://www.youtube.com/watch?v=V-CrlmTl1EQ"
    },
    {
        image: "/images/work/work-img-6.jpg",
        title: "Mug Sticker Designing",
        client: "John Honnai",
        slug: "mug-sticker-designing"
    }
];




export const GET = async () => {
    return NextResponse.json({
        workData
    });
};
