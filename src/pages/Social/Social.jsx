import avatarImg from "../../assets/image/anh-1.png";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import "./Social.css";

function Social() {
    const { data, loading } = usePortfolioData();
    const socials = data.socials || [];

    if (loading) {
        return (
            <main className="social-page">
                <section className="social-wrapper">
                    <p>Đang tải dữ liệu mạng xã hội...</p>
                </section>
            </main>
        );
    }

    return (
        <main className="social-page">
            <section className="social-wrapper">
                <div className="social-layout">
                    <aside className="social-intro">
                        <div className="avatar-box">
                            <div className="avatar-glow"></div>
                            <img src={avatarImg} alt="Nguyễn Tuấn Tài" className="avatar-img" />
                        </div>

                        <div className="page-kicker">Mạng xã hội</div>

                        <h1>Kết nối tôi.</h1>

                        <p>
                            Đây là những nền tảng mạng xã hội cá nhân của mình.
                            Người xem có thể liên hệ, theo dõi hoặc xem các dự án
                            thông qua các đường dẫn bên dưới.
                        </p>

                        <div className="social-note">
                            <span>✨</span>
                            <p>
                                Mình thường dùng mạng xã hội để chia sẻ, học hỏi và lưu lại
                                những điều thú vị trong quá trình phát triển bản thân.
                            </p>
                        </div>
                    </aside>

                    <section className="social-panel">
                        <div className="social-panel-head">
                            <div>
                                <span>Social Links</span>
                                <h2>Thông tin kết nối</h2>
                            </div>

                            <div className="social-count">
                                {socials.length}
                            </div>
                        </div>

                        <div className="social-list">
                            {socials.length > 0 ? (
                                socials.map((item, index) => (
                                    <a
                                        className="social-card"
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={`${item.name}-${index}`}
                                    >
                                        <div className="social-icon">{item.icon}</div>

                                        <div className="social-content">
                                            <h3>{item.name}</h3>
                                            <p>{item.desc}</p>
                                            <strong>{item.value}</strong>
                                        </div>

                                        <div className="social-arrow">↗</div>
                                    </a>
                                ))
                            ) : (
                                <p>Chưa có mạng xã hội nào trong JSON.</p>
                            )}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Social;