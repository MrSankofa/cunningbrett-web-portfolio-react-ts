const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <footer className="pb-[30px] pt-[30px]">
            <div className="w-full">
                <div className="w-full">
                    <div className="col-12 px-[30px] w-full">
                        <div className="text-center">
                            <p className="text-[13px] text-[#ddd] font-[300]">
                                © {currentYear} Portfolio is developed by Brett Cunningham II
                                owner of {" "}
                                <span className="underline text-main">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Altruistic Software Development
                                    </a>
                                </span>{" "}.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
