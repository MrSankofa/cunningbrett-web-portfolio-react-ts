import Footer from "./components/Footer.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import React, {useEffect, useState} from "react";
import Header from "./components/Header.tsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="bg-sub_dark text-[14px] lg:px-[40px] min-h-screen flex flex-col">

                {/* Loader */}
                {loading && (
                    <div className="loader-wrap fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-transparent">
                        <svg className="absolute w-screen h-screen fill-current text-[#131313]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                        </svg>
                        <div className="loader-wrap-heading relative z-20 text-xl font-thin tracking-wider uppercase">
                            <div className="load-text">
                                {["L", "o", "a", "d", "i", "n", "g"].map((char, index) => (
                                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="inline-block animate-loading mx-[20px]">
                                        {char}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {!loading && (
                    <>
                        {/* Background Lines */}
                        <div className="lines fixed top-0 left-0 w-full h-screen flex z-0 pointer-events-none">
                            {[...Array(10)].map((_, index) => (
                                <span
                                    key={index}
                                    className="absolute top-0 h-screen border-r border-l border-white border-opacity-5 border-dashed"
                                    style={{
                                        left: `${(index + 1) * (100 / 11)}%`, // Distributes evenly across the width
                                        width: "1px", // Keeps the lines thin
                                    }}
                                ></span>
                            ))}
                        </div>



                        <Header />

                        {/* Main Content Should Expand */}
                        <div className="flex-grow">
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

                                    <div className="w-full mx-auto xxl:max-w-[1280px] xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] px-[3px] grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-10">
                                        <ProjectCard title="Frontend Work" imgSrc="img/demos/4.png" link="dark/home.html" adjustImageSize={false} />
                                        <ProjectCard title="Backend Work" imgSrc="img/demos/3.png" link="dark/coming-soon.html" adjustImageSize={true} />
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Footer Takes Full Width & Sticks to Bottom */}
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
}

export default App;
