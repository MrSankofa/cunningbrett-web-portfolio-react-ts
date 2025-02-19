import {JSX} from "react";
import '../assets/css/main.css'
import '../assets/css/style.css'

function Header(): JSX.Element {

    return (<div className="flex justify-center pt-[30px] pb-[30px]">
        <div className="w-full mx-auto max-w-[1280px] px-3 flex justify-between">
            <div className="px-4 flex justify-center items-center">
                <a href="#" className="w-[60px]">
                    <img
                        className="sankofa-logo"
                        src="img/logo-light.png"
                        alt="Logo"
                    />
                </a>
            </div>
            <div className="px-4 lg:flex justify-center items-center">
                <a
                    href="#contact"
                    className="text-[#fff] text-[14px] font-[400] border border-[#fff] rounded hover:text-[#1d1d1d] hover:bg-[#fff] py-[14px] px-[35px] transition-all duration-500 ease-in-out"
                >
                    Contact Now
                </a>
            </div>
        </div>
    </div>);
}

export default Header;
