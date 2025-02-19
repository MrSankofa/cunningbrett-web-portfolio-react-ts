import Footer from "./components/Footer.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";
import Loader from "./components/Loader.tsx";
import BackgroundLines from "./components/BackgroundLines.tsx";
import HeroSection from "./components/HeroSection.tsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-sub_dark text-[14px] lg:px-[40px] min-h-screen flex flex-col">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <BackgroundLines />
                    <Header />
                    <div className="flex-grow">
                        <HeroSection />
                        <section className="py-[100px]">
                            <div className="w-full mx-auto xxl:max-w-[1280px] xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] px-[3px]">
                                <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-10">
                                    <ProjectCard title="Frontend Work" imgSrc="img/demos/4.png" link="dark/home.html" adjustImageSize={false} />
                                    <ProjectCard title="Backend Work" imgSrc="img/demos/3.png" link="dark/coming-soon.html" adjustImageSize={true} />
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;

