export default function Booknow() {
    return (
        <section>
            <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 py-4 w-full space-y-4 pt-16 md:pt-32 pb-20">
                <div className="bg-gray-950 dark:bg-gray-200 p-4 rounded-3xl flex flex-col md:flex-row justify-between items-stretch">
                    <div className="max-w-xl sm:px-5 pt-2 sm:pt-6 md:pt-12 pb-5 flex flex-col gap-8 justify-between">
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white dark:text-gray-950">
                                {"Rajasthani Roots, Bollywood Classics, Garba Vibes ".split("").map((char, i) => (
                                    <span key={i}>{char}</span>
                                ))}
                            </h1>
                            <p className="text-base sm:text-lg font-normal text-white dark:text-gray-950">Blending Mayra & Bhaat traditions, Marwadi Byavara Geet, Bollywood classics, Gujarati Garba, and deep Rajasthani roots into one soulful musical experience.</p>
                            <div className="w-fit">
                                <a href="https://api.whatsapp.com/send?phone=16094146699&text=Let%27s%20Talk%20about%20your%20singing%20shows%20" target="_blank" rel="noopener noreferrer" >
                                    <button className="relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group">
                                        <span className="relative z-10 text-xl font-medium text-white group-hover:text-white transition-colors duration-300">
                                            Book Now
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative min-w-xs min-h-110">
                        <img
                            src="/images/home/banner/banner-img5.gif"
                            alt="hero-17-img"
                            width={450}
                            height={498}
                            className="rounded-2xl w-full min-h-110 h-full object-cover"
                        />
                        {/* <div className="absolute inset-0">
                            <div className="absolute top-3.5 sm:top-5 left-3.5 sm:left-5">
                                <Card className="bg-gray-950/20 backdrop-blur-xl w-fit">
                                    <CardContent className="flex flex-col gap-1">
                                        <p className="text-xs sm:text-base font-normal text-white">Sales</p>
                                        <p className="text-xl sm:text-3xl font-normal text-white">$42,785</p>
                                        <div className="flex items-center gap-2">
                                            <Badge className="h-auto px-2 py-0.5">+9%</Badge>
                                            <p className="text-xs text-white">Compare to last year</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 right-3.5 sm:right-5">
                                <Card className="bg-gray-950/20 backdrop-blur-xl w-fit">
                                    <CardContent className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <p className="text-xl sm:text-3xl font-normal text-white">22%</p>
                                            <p className="text-xs sm:text-base font-normal text-white max-w-12">Organic Traffic</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge className="h-auto px-2 py-0.5">+14%</Badge>
                                            <p className="text-xs text-white">Compare to last year</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5">
                                <Card className="bg-gray-950/20 backdrop-blur-xl w-fit">
                                    <CardContent className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <p className="text-xl sm:text-3xl font-normal text-white">69%</p>
                                            <p className="text-xs sm:text-base font-normal text-white max-w-12">Enagement rate</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge className="h-auto px-2 py-0.5">+20%</Badge>
                                            <p className="text-xs text-white">Compare to last year</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}