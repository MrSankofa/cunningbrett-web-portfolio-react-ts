import '../assets/css/style.css'

interface ProjectCardProps {
    title: string;
    imgSrc: string;
    link: string;
    adjustImageSize: boolean
}

import { motion } from "framer-motion";

const ProjectCard = ({ title, imgSrc, link, adjustImageSize }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-item px-[25px] bg-dark border border-[#ffffff1a] rounded-30 py-[100px] px-[15px] md:px-[40px] lg:px-[50px] relative mt-[40px]"
        >
            <div className="relative p-[40px] z-3 mt-[40px]">
                <div className="border border-[#aaa] rounded-t-md rounded-b-none overflow-hidden">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={imgSrc}
                            alt={title}
                            className={`mx-auto ${adjustImageSize ? "w-[71%]" : "w-[83%]"}`}
                        />
                    </a>
                </div>
                <div className="custom-width ml-[-40px] h-[30px] border border-gray-400 rounded-b-full z-3 relative left-[4%]"></div>
            </div>
            <div className="text-center z-3">
                <h3 className="font-[500] md:text-[38px] sm:text-[24px]">{title}</h3>
            </div>
        </motion.div>
    );
};

export default ProjectCard;



// interface ProjectCardProps {
//     title: string;
//     imgSrc: string;
//     link: string
// }
//
// const ProjectCard = ({link, imgSrc, title}: ProjectCardProps) => {
//
//     return (
//         <div className="card-item bg-dark border border-[#ffffff1a] rounded-30 p-10 py-[100px] px-[15px] md:px-[40px] lg:px-[50px] relative mt-[40px]">
//             <div className="relative p-10">
//                 <div className="border border-[#aaa] rounded-t-md overflow-hidden">
//                     <a href={link} target="_blank" rel="noopener noreferrer">
//                         <img src={imgSrc} alt={title} />
//                     </a>
//                 </div>
//                 <div className="h-[30px] border border-gray-400 rounded-b-full"></div>
//             </div>
//             <div className="text-center">
//                 <h3 className="font-[500] md:text-[38px] sm:text-[24px]">{title}</h3>
//             </div>
//         </div>
//     );
// }
//
// export default ProjectCard;
