import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ showHint = false }) {
    const [dark, setDark] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const savedTheme = localStorage.getItem("cv-theme");
        setDark(savedTheme === "dark");
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("cv-theme", dark ? "dark" : "light");
    }, [dark]);

    function handleToggleTheme(e) {
        e.stopPropagation();
        setDark((prev) => !prev);
    }

    return (
        <>
            <header className="site-header">
                <div className="header-left">
                    {!isHomePage && (
                        <Link to="/" className="header-back-link">
                            ← Về trang chủ
                        </Link>
                    )}
                </div>

                <div className="header-right">
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={handleToggleTheme}
                        aria-label="Đổi chế độ sáng tối"
                        title="Đổi sáng tối"
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
        </>
    );
}

export default Header;