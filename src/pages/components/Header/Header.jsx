import { useEffect, useState } from "react";
import "./Header.css";

function makeId() {
    return `${Date.now()}-${Math.random()}`;
}

function Header({ showHint = false }) {
    const [dark, setDark] = useState(false);
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("cv-theme");

        if (savedTheme === "dark") {
            setDark(true);
            document.body.classList.add("dark");
        } else {
            setDark(false);
            document.body.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("cv-theme", dark ? "dark" : "light");
    }, [dark]);

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

    function handleToggleTheme(e) {
        e.stopPropagation();
        setDark((prev) => !prev);
        createRipple(e.clientX, e.clientY);
    }

    return (
        <>
            <header className="site-header">
                <div className="toggle-wrapper">
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={handleToggleTheme}
                        aria-label="Đổi chế độ sáng tối"
                    >
                        <span className="toggle-glow"></span>

                        <span className="toggle-dot">
                            {dark ? "☾" : "☀"}
                        </span>
                    </button>
                </div>
            </header>

            {showHint && (
                <div className="mode-hint">
                    {dark ? "✦ CHẾ ĐỘ TỐI ✦" : "✦ CHẾ ĐỘ SÁNG ✦"}
                </div>
            )}

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
        </>
    );
}

export default Header;