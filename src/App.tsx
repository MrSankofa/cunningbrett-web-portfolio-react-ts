
import './assets/css/App.css'
import './assets/css/main.css'
import './assets/css/plugins.css'
// import Loader from "./components/Loader.tsx";
import Header from "./components/Header.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}

      {/*</div>*/}


        <div className="bg-sub_dark text-[14px] lg:px-[40px]">
            {/*<Loader />*/}
            <Header />

            {/* Project Section */}
            <section className="py-[100px]">
                <div className="w-full mx-auto xxl:max-w-[1280px] xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] px-[3px]">
                    {/* Section Heading */}
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

                    {/* Project Cards Grid */}
                    <div className="w-full mx-auto xxl:max-w-[1280px] xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] px-[3px] grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-10">
                        <ProjectCard
                            title="Frontend Work"
                            imgSrc="img/demos/4.png"
                            link="dark/home.html"
                        />
                        <ProjectCard
                            title="Backend Work"
                            imgSrc="img/demos/3.png"
                            link="dark/coming-soon.html"
                        />
                    </div>
                </div>
            </section>



            {/*/!* Hero Section *!/*/}
            {/*<section className="py-[100px] text-center">*/}
            {/*    <h1 className="text-[70px] mb-[15px] font-[500] text-[#fff]">Brett</h1>*/}
            {/*    <h4 className="font-[500] lg:text-[28px] text-[20px] text-[#fff]">*/}
            {/*        Software <span className="text-main">Developer</span>*/}
            {/*    </h4>*/}
            {/*</section>*/}

            {/*/!* Project Section *!/*/}
            {/*<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 px-6">*/}
            {/*    <ProjectCard*/}
            {/*        title="Frontend Work"*/}
            {/*        imgSrc="img/demos/4.png"*/}
            {/*        link="dark/home.html"*/}
            {/*    />*/}
            {/*    <ProjectCard*/}
            {/*        title="Backend Work"*/}
            {/*        imgSrc="img/demos/3.png"*/}
            {/*        link="dark/coming-soon.html"*/}
            {/*    />*/}
            {/*</div>*/}

            <Footer />
        </div>


    </>
  )
}

export default App
