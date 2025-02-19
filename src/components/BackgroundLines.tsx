const BackgroundLines = ({ lineCount = 10 }) => {
    return (
        <div className="lines fixed top-0 left-0 w-full h-screen flex z-0 pointer-events-none">
            {[...Array(lineCount)].map((_, index) => (
                <span
                    key={index}
                    className="absolute top-0 h-screen border-r border-l border-white border-opacity-5 border-dashed"
                    style={{
                        left: `${(index + 1) * (100 / (lineCount + 1))}%`,
                        width: "1px",
                    }}
                ></span>
            ))}
        </div>
    );
};

export default BackgroundLines;
