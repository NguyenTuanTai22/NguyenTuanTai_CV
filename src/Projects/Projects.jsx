import { usePortfolioData } from "../hooks/usePortfolioData";
import "./Projects.css";

function Projects() {
    const { data, loading } = usePortfolioData();
    const projects = data.projects || [];

    if (loading) {
        return (
            <main className="page-shell projects-page">
                <section className="page-card">
                    <p className="page-desc">Đang tải dữ liệu dự án...</p>
                </section>
            </main>
        );
    }

    return (
        <main className="page-shell projects-page">
            <section className="page-card">
                <div className="page-kicker">Dự án</div>
                <h1>Dự án đã làm</h1>

                <p className="page-desc">
                    Một số dự án mình đã và đang xây dựng trong quá trình học lập trình web.
                </p>

                <div className="projects-list">
                    {projects.length > 0 ? (
                        projects.map((item, index) => (
                            <article className="project-card" key={`${item.title}-${index}`}>
                                <span>{item.icon}</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="page-desc">Chưa có dự án nào trong JSON.</p>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Projects;