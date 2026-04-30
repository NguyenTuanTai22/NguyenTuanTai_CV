import "./Projects.css";

function Projects() {
    const projects = [
        {
            icon: "📘",
            title: "Website học từ vựng",
            desc: "Giao diện luyện từ vựng tiếng Anh, thống kê tiến độ và lịch sử học."
        },
        {
            icon: "🎬",
            title: "Website Movie",
            desc: "Trang xem phim có bố cục người dùng và khu vực quản trị riêng."
        },
        {
            icon: "🧾",
            title: "CV cá nhân",
            desc: "CV dạng website với hiệu ứng orbit, dark mode và trang thông tin cá nhân."
        }
    ];

    return (
        <main className="page-shell projects-page">
            <section className="page-card">
                <div className="page-kicker">Dự án</div>
                <h1>Dự án đã làm</h1>

                <p className="page-desc">
                    Một số dự án mình đã và đang xây dựng trong quá trình học lập trình web.
                </p>

                <div className="projects-list">
                    {projects.map((item) => (
                        <article className="project-card" key={item.title}>
                            <span>{item.icon}</span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;