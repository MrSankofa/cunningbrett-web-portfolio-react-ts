import '../assets/css/style.css'

interface ProjectCardProps {
    title: string;
    imgSrc: string;
    link: string
}

const ProjectCard = ({link, imgSrc, title}: ProjectCardProps) => {

    return (
        <div className="card-item bg-dark border border-[#ffffff1a] rounded-30 p-10 py-[100px] px-[15px] md:px-[40px] lg:px-[50px] relative mt-[40px]">
            <div className="relative p-10">
                <div className="border border-[#aaa] rounded-t-md overflow-hidden">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={imgSrc} alt={title} />
                    </a>
                </div>
                <div className="h-[30px] border border-gray-400 rounded-b-full"></div>
            </div>
            <div className="text-center">
                <h3 className="font-[500] md:text-[38px] sm:text-[24px]">{title}</h3>
            </div>
        </div>
    );
}

export default ProjectCard;
