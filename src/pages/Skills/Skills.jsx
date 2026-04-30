import "./Skills.css";

function Skills() {
    const skills = [
        { icon: "🌐", name: "HTML / CSS", level: "Tốt", percent: "86%" },
        { icon: "⚛️", name: "ReactJS", level: "Đang phát triển", percent: "72%" },
        { icon: "🎨", name: "UI / Responsive", level: "Tốt", percent: "80%" },
        { icon: "🧠", name: "JavaScript", level: "Khá", percent: "70%" },
        { icon: "🗄️", name: "ASP.NET", level: "Đang học", percent: "62%" },
        { icon: "🛠️", name: "Git / Deploy", level: "Cơ bản", percent: "58%" }
    ];

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
                    {skills.map((item) => (
                        <article className="skill-card" key={item.name}>
                            <div className="skill-top">
                                <span>{item.icon}</span>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.level}</p>
                                </div>
                            </div>

                            <div className="skill-bar">
                                <div style={{ width: item.percent }}></div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Skills;