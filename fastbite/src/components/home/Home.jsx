import './Home.css';

const Home = () => {
    const letters = "hngrPac";

    return (
        <div className="main">
            <div className="center">
                <div className="pacman-con">
                    <div className="pacman"></div>
                    <div className="mouth"></div>
                    <div className="mouth"></div>
                </div>
                {letters.split("").map((letter, index) => (
                    <div
                        key={index}
                        className="letters"
                        style={{ '--gap': index }}
                    >
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;