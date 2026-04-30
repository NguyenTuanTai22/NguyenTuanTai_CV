import { useNavigate } from "react-router";
import avatarImage from "../../assets/image/anh-2.png";
import "./Info.css";

const Info = () => {
    const navigate = useNavigate();

    return (
        <div className="info-page">
            <div className="info-bg">
                <div className="info-orb orb-1"></div>
                <div className="info-orb orb-2"></div>
                <div className="info-orb orb-3"></div>
            </div>

            <button
                type="button"
                className="info-back-btn"
                onClick={() => navigate("/")}
            >
                <span>←</span>
                Quay lại Home
            </button>

            <main className="info-container">
                <section className="info-profile-card">
                    <div className="profile-glow"></div>

                    <div className="avatar-box">
                        <div className="avatar-ring ring-one"></div>
                        <div className="avatar-ring ring-two"></div>

                        <img
                            src={avatarImage}
                            alt="Nguyễn Tuấn Tài"
                            className="info-avatar"
                        />
                    </div>

                    <div className="profile-basic">
                        <p className="profile-label">PROFILE</p>

                        <h1>Nguyễn Tuấn Tài</h1>

                        <p className="profile-role">
                            Frontend Developer / React Learner
                        </p>

                        <div className="profile-status">
                            <span></span>
                            Đang xây dựng website CV cá nhân
                        </div>
                    </div>
                </section>

                <section className="info-main-card">
                    <div className="info-heading">
                        <p>THÔNG TIN CÁ NHÂN</p>
                        <h2>Xin chào, tôi là Tài</h2>
                    </div>

                    <p className="info-summary">
                        Tôi đang học và xây dựng giao diện web bằng React. Mục tiêu của tôi
                        là tạo ra một website CV cá nhân có giao diện đẹp, hiệu ứng mượt,
                        bố cục rõ ràng và có thể mở rộng thêm các trang như kỹ năng, dự án,
                        mạng xã hội và liên hệ.
                    </p>

                    <div className="info-detail-grid">
                        <div className="detail-item">
                            <span>👤</span>
                            <div>
                                <small>Họ tên</small>
                                <strong>Nguyễn Tuấn Tài</strong>
                            </div>
                        </div>

                        <div className="detail-item">
                            <span>🎯</span>
                            <div>
                                <small>Mục tiêu</small>
                                <strong>Hoàn thiện CV cá nhân</strong>
                            </div>
                        </div>

                        <div className="detail-item">
                            <span>💻</span>
                            <div>
                                <small>Đang học</small>
                                <strong>HTML, CSS, JavaScript, React</strong>
                            </div>
                        </div>

                        <div className="detail-item">
                            <span>📍</span>
                            <div>
                                <small>Khu vực</small>
                                <strong>Việt Nam</strong>
                            </div>
                        </div>
                    </div>

                    <div className="info-section-title">
                        <span>✦</span>
                        <h3>Sở thích cá nhân</h3>
                    </div>

                    <div className="hobby-grid">
                        <div className="hobby-card">
                            <span>🎨</span>
                            <h4>Thiết kế giao diện</h4>
                            <p>Thích làm UI đẹp, hiệu ứng mượt, bố cục rõ ràng.</p>
                        </div>

                        <div className="hobby-card">
                            <span>💻</span>
                            <h4>Lập trình web</h4>
                            <p>Thích thử các layout mới bằng HTML, CSS, JavaScript và React.</p>
                        </div>

                        <div className="hobby-card">
                            <span>📖</span>
                            <h4>Viết truyện</h4>
                            <p>Thích xây dựng thế giới, nhân vật và cốt truyện riêng.</p>
                        </div>

                        <div className="hobby-card">
                            <span>🎧</span>
                            <h4>Nghe nhạc</h4>
                            <p>Nghe nhạc khi học, code hoặc lên ý tưởng giao diện.</p>
                        </div>

                        <div className="hobby-card">
                            <span>🌙</span>
                            <h4>Hiệu ứng ảo diệu</h4>
                            <p>Thích các hiệu ứng ánh sáng, glow, particle và chuyển động.</p>
                        </div>

                        <div className="hobby-card">
                            <span>📚</span>
                            <h4>Học thêm</h4>
                            <p>Thích tìm hiểu công nghệ mới để cải thiện sản phẩm cá nhân.</p>
                        </div>
                    </div>

                    <div className="goal-card">
                        <div>
                            <span className="goal-icon">🚀</span>
                        </div>

                        <div>
                            <h3>Mục tiêu hiện tại</h3>
                            <p>
                                Hoàn thiện website CV cá nhân bằng React, sau đó tách riêng
                                các trang Thông tin, Kỹ năng, Dự án, Mạng xã hội và Liên hệ.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Info;