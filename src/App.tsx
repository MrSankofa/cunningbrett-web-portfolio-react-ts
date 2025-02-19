
import './assets/css/App.css'
import './assets/css/main.css'
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


            {/* Hero Section */}
            <section className="py-[100px] text-center">
                <h1 className="text-[70px] mb-[15px] font-[500] text-[#fff]">Brett</h1>
                <h4 className="font-[500] lg:text-[28px] text-[20px] text-[#fff]">
                    Software <span className="text-main">Developer</span>
                </h4>
            </section>

            {/* Project Section */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 px-6">
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

            <Footer />
        </div>


    </>
  )
}

export default App
