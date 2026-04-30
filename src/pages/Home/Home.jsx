import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import avatarImage from "../../assets/image/anh-1.png";
import Header from "../components/Header/Header";
import "./Home.css";

function makeId() {
    return `${Date.now()}-${Math.random()}`;
}

function Home() {
    const navigate = useNavigate();

    const [showPlanets, setShowPlanets] = useState(false);
    const [ripples, setRipples] = useState([]);
    const [activePlanet, setActivePlanet] = useState(null);

    const particles = useMemo(() => {
        return Array.from({ length: 42 }, (_, index) => ({
            id: index,
            left: `${Math.random() * 100}%`,
            size: `${2 + Math.random() * 4}px`,
            delay: `${Math.random() * 10}s`,
            duration: `${8 + Math.random() * 12}s`,
            move: `${-40 + Math.random() * 80}px`
        }));
    }, []);

    useEffect(() => {
        function closeOrbit() {
            setShowPlanets(false);
        }

        function closeByEsc(e) {
            if (e.key === "Escape") {
                setShowPlanets(false);
            }
        }

        document.addEventListener("click", closeOrbit);
        document.addEventListener("keydown", closeByEsc);

        return () => {
            document.removeEventListener("click", closeOrbit);
            document.removeEventListener("keydown", closeByEsc);
        };
    }, []);

    function createRipple(x, y) {
        const id = makeId();

        setRipples((prev) => [
            ...prev,
            {
                id,
                x,
                y
            }
        ]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((item) => item.id !== id));
        }, 700);
    }

    function handleImageClick(e) {
        e.stopPropagation();
        setShowPlanets((prev) => !prev);
        createRipple(e.clientX, e.clientY);
    }

    function handlePlanetClick(e, id, path) {
        e.stopPropagation();

        setActivePlanet(id);
        createRipple(e.clientX, e.clientY);

        setTimeout(() => {
            setActivePlanet(null);

            if (path) {
                navigate(path);
            }
        }, 300);
    }

    return (
        <div className="home-page">
            <Header showHint={true} />

            <div className="home-bg">
                <div className="home-light light-1"></div>
                <div className="home-light light-2"></div>
                <div className="home-light light-3"></div>
            </div>

            <main className={`image-container ${showPlanets ? "show-planets" : ""}`}>
                <div className="magic-ring ring-1"></div>
                <div className="magic-ring ring-2"></div>
                <div className="magic-ring ring-3"></div>

                <img
                    src={avatarImage}
                    alt="Ảnh chính"
                    className="center-image"
                    onClick={handleImageClick}
                />

                <div className="orbit-menu">
                    <button
                        type="button"
                        title="Thông tin"
                        className={`planet planet-1 planet-left ${activePlanet === 1 ? "is-active" : ""}`}
                        onClick={(e) => handlePlanetClick(e, 1, "/info")}
                    >
                        <span className="planet-icon">👤</span>
                        <span className="planet-text">Thông tin</span>
                    </button>

                    <button
                        type="button"
                        title="Kỹ năng"
                        className={`planet planet-2 planet-right ${activePlanet === 2 ? "is-active" : ""}`}
                        onClick={(e) => handlePlanetClick(e, 2, "/skills")}
                    >
                        <span className="planet-icon">💻</span>
                        <span className="planet-text">Kỹ năng</span>
                    </button>

                    <button
                        type="button"
                        title="Dự án"
                        className={`planet planet-3 planet-left ${activePlanet === 3 ? "is-active" : ""}`}
                        onClick={(e) => handlePlanetClick(e, 3, "/projects")}
                    >
                        <span className="planet-icon">📁</span>
                        <span className="planet-text">Dự án</span>
                    </button>

                    <button
                        type="button"
                        title="Liên hệ"
                        className={`planet planet-4 planet-right ${activePlanet === 4 ? "is-active" : ""}`}
                        onClick={(e) => handlePlanetClick(e, 4, "/contact")}
                    >
                        <span className="planet-icon">📞</span>
                        <span className="planet-text">Liên hệ</span>
                    </button>

                    <button
                        type="button"
                        title="Mạng xã hội"
                        className={`planet planet-5 planet-left ${activePlanet === 5 ? "is-active" : ""}`}
                        onClick={(e) => handlePlanetClick(e, 5, "/social")}
                    >
                        <span className="planet-icon">🌐</span>
                        <span className="planet-text">Mạng xã hội</span>
                    </button>

                    <button
                        type="button"
                        title="Cài đặt"
                        className={`planet planet-6 planet-right ${activePlanet === 6 ? "is-active" : ""}`}
                        onClick={(e) => handlePlanetClick(e, 6, "/settings")}
                    >
                        <span className="planet-icon">⚙</span>
                        <span className="planet-text">Cài đặt</span>
                    </button>
                </div>
            </main>

            <div className="glow-particles">
                {particles.map((item) => (
                    <span
                        key={item.id}
                        style={{
                            "--left": item.left,
                            "--size": item.size,
                            "--delay": item.delay,
                            "--duration": item.duration,
                            "--move": item.move
                        }}
                    ></span>
                ))}
            </div>

            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="ripple"
                    style={{
                        "--x": `${ripple.x}px`,
                        "--y": `${ripple.y}px`
                    }}
                ></span>
            ))}
        </div>
    );
}

export default Home;