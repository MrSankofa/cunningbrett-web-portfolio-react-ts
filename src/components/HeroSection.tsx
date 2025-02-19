const HeroSection = () => {
    return (
        <section className="py-[100px]">
            <div className="w-full mx-auto xxl:max-w-[1280px] xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] px-[3px]">
                <div className="sec-head mb-[80px]">
                    <div className="flex justify-center">
                        <div className="px-[15px] lg:w-[75%] w-full">
                            <div className="text-center">
                                <h1 className="text-[70px] mb-[15px] font-[500]">Brett</h1>
                                <h4 className="font-[500] lg:text-[28px] text-[20px]">
                                    Software <span className="text-main">Developer</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
