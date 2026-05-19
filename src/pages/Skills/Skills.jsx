import { usePortfolioData } from "../../hooks/usePortfolioData";
import "./Skills.css";

function toPercentWidth(value) {
    const raw = String(value || "0").replace("%", "").trim();
    const number = Number(raw);

    if (!Number.isFinite(number)) {
        return "0%";
    }

    return `${Math.min(100, Math.max(0, number))}%`;
}

function Skills() {
    const { data, loading } = usePortfolioData();
    const skills = data.skills || [];

    if (loading) {
        return (
            <main className="page-shell skills-page">
                <section className="page-card">
                    <p className="page-desc">Đang tải dữ liệu kỹ năng...</p>
                </section>
            </main>
        );
    }

    return (
        <main className="page-shell skills-page">
            <section className="page-card">
                <div className="page-kicker">Kỹ năng</div>
                <h1>Kỹ năng của tôi</h1>

                <p className="page-desc">
                    Các kỹ năng mình đang học và sử dụng trong quá trình làm giao diện web,
                    xây dựng CV cá nhân và các dự án nhỏ.
                </p>

                <div className="skills-grid">
                    {skills.length > 0 ? (
                        skills.map((item, index) => (
                            <article className="skill-card" key={`${item.name}-${index}`}>
                                <div className="skill-top">
                                    <span>{item.icon}</span>

                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.level}</p>
                                    </div>
                                </div>

                                <div className="skill-bar">
                                    <div style={{ width: toPercentWidth(item.percent) }}></div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="page-desc">Chưa có kỹ năng nào trong JSON.</p>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Skills;