import { useNavigate } from "react-router";
import avatarImage from "../../assets/image/anh-2.png";
import "./Social.css";

const Social = () => {
    const navigate = useNavigate();

    return (
        <div className="social-page">
            <div className="social-bg">
                <div className="social-orb social-orb-1"></div>
                <div className="social-orb social-orb-2"></div>
                <div className="social-orb social-orb-3"></div>
            </div>

            <button
                type="button"
                className="social-back-btn"
                onClick={() => navigate("/")}
            >
                <span>←</span>
                Quay lại Home
            </button>

            <main className="social-container">
                <section className="social-layout">
                    <div className="social-avatar-box">
                        <div className="social-avatar-glow"></div>
                        <div className="social-avatar-ring social-ring-1"></div>
                        <div className="social-avatar-ring social-ring-2"></div>

                        <img
                            src={avatarImage}
                            alt="Nguyễn Tuấn Tài"
                            className="social-avatar"
                        />
                    </div>

                    <div className="social-right">
                        <div className="social-hero-content">
                            <p className="social-label">SOCIAL NETWORK</p>

                            <h1>
                                Mạng xã hội
                                <span>Kết nối với tôi</span>
                            </h1>

                            <p className="social-desc">
                                Đây là khu vực chứa các liên kết mạng xã hội, tài khoản học tập,
                                nền tảng chia sẻ dự án và thông tin liên hệ cá nhân.
                            </p>

                            <div className="social-mini-stats">
                                <div>
                                    <strong>06</strong>
                                    <span>Nền tảng</span>
                                </div>

                                <div>
                                    <strong>CV</strong>
                                    <span>Cá nhân</span>
                                </div>

                                <div>
                                    <strong>React</strong>
                                    <span>Website</span>
                                </div>
                            </div>
                        </div>

                        <section className="social-grid">
                            <a
                                href="https://www.facebook.com/kun.22tuoi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card facebook"
                            >
                                <div className="social-icon">f</div>

                                <div className="social-info">
                                    <h3>Facebook</h3>
                                    <p>Trang cá nhân và kết nối bạn bè.</p>
                                    <span>facebook.com/kun.22tuoi</span>
                                </div>

                                <div className="social-arrow">↗</div>
                            </a>

                            <a
                                href="https://github.com/NguyenTuanTai22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card github"
                            >
                                <div className="social-icon">⌘</div>

                                <div className="social-info">
                                    <h3>GitHub</h3>
                                    <p>Lưu trữ source code và các dự án cá nhân.</p>
                                    <span>github.com/NguyenTuanTai22</span>
                                </div>

                                <div className="social-arrow">↗</div>
                            </a>

                            <a
                                href="https://www.tiktok.com/@ten-tiktok-cua-ban"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card tiktok"
                            >
                                <div className="social-icon">♪</div>

                                <div className="social-info">
                                    <h3>TikTok</h3>
                                    <p>Chia sẻ video ngắn, nội dung cá nhân hoặc học tập.</p>
                                    <span>Thay bằng link TikTok</span>
                                </div>

                                <div className="social-arrow">↗</div>
                            </a>

                            <a
                                href="https://www.youtube.com/@Tainho19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card youtube"
                            >
                                <div className="social-icon">▶</div>

                                <div className="social-info">
                                    <h3>YouTube</h3>
                                    <p>Kênh video, học tập hoặc giới thiệu sản phẩm.</p>
                                    <span>youtube.com/@Tainho19</span>
                                </div>

                                <div className="social-arrow">↗</div>
                            </a>

                            <a
                                href="mailto:emailcuaban@gmail.com"
                                className="social-card gmail"
                            >
                                <div className="social-icon">@</div>

                                <div className="social-info">
                                    <h3>Gmail</h3>
                                    <p>Email liên hệ cá nhân hoặc công việc.</p>
                                    <span>Thay bằng Gmail của bạn</span>
                                </div>

                                <div className="social-arrow">↗</div>
                            </a>

                            <a
                                href="https://zalo.me/0900000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-card zalo"
                            >
                                <div className="social-icon">Z</div>

                                <div className="social-info">
                                    <h3>Zalo</h3>
                                    <p>Liên hệ nhanh qua số điện thoại hoặc Zalo cá nhân.</p>
                                    <span>Thay bằng link Zalo</span>
                                </div>

                                <div className="social-arrow">↗</div>
                            </a>
                        </section>

                        <section className="social-note">
                            <div className="note-icon">✦</div>

                            <div>
                                <h3>Ghi chú</h3>
                                <p>
                                    Các nút mạng xã hội dùng thẻ <strong>a</strong>. Khi thay link,
                                    nhớ ghi đầy đủ dạng <strong>https://...</strong> để mở đúng trang.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Social;