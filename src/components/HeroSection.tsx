import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="py-[100px]"
        >
            <div className="w-full mx-auto xxl:max-w-[1280px] xl:max-w-[1140px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] px-[3px]">
                <div className="sec-head mb-[80px]">
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="px-[15px] lg:w-[75%] w-full text-center"
                        >
                            <h1 className="text-[70px] mb-[15px] font-[500]">Brett</h1>
                            <h4 className="font-[500] lg:text-[28px] text-[20px]">
                                Software <span className="text-main">Developer</span>
                            </h4>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
