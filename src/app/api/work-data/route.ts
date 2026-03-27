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
        image: "/images/work/work-img-3.jpg",
        title: "Fashion Website Template",
        client: "John Honnai",
        slug: "fashion-website-template"
    },
    {
        image: "/images/work/work-img-4.jpg",
        title: "Book Cover Design",
        client: "John Honnai",
        slug: "book-cover-design"
    },
    {
        image: "/images/work/work-img-5.jpg",
        title: "Mobile App Design",
        client: "John Honnai",
        slug: "mobile-app-design"
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
