import {JSX, useEffect} from "react";

function Loader(): JSX.Element {

    useEffect(() => {
        console.log("Loader Mounter!")
    }, []);
    return (
        <div className="loader-wrap fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-transparent">
            <svg
                className="absolute w-screen h-screen fill-current text-[#131313]"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
            >
                <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
            </svg>

            <div className="loader-wrap-heading relative z-20 text-xl font-thin tracking-wider uppercase">
                <div className="load-text">
                    {"Loading".split("").map((letter, index) => (
                        <span
                            key={index}
                            style={{animationDelay: `${index * 0.1}s`}}
                            className="inline-block animate-loading mx-[20px]"
                        >
              {letter}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Loader;
