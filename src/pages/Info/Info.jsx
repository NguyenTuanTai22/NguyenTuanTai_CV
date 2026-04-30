import avatarImg from "../../assets/image/anh-1.png"
import "./Info.css";

function Info() {
    return (
        <main className="info-page">
            <section className="info-wrapper">
                <div className="info-layout">
                    <aside className="profile-panel">
                        <div className="avatar-box">
                            <div className="avatar-glow"></div>
                            <img src={avatarImg} alt="Nguyễn Tuấn Tài" className="avatar-img" />
                        </div>

                        <h1>Nguyễn Tuấn Tài</h1>
                        <p className="job-title">Sinh ngày 09/01</p>

                        <div className="status-badge">
                            <span></span>
                            Luôn cố gắng học hỏi và phát triển bản thân
                        </div>

                        <div className="profile-line"></div>

                        <div className="quick-info">
                            <div>
                                <small>Họ tên</small>
                                <strong>Nguyễn Tuấn Tài</strong>
                            </div>

                            <div>
                                <small>Ngày sinh</small>
                                <strong>09/01</strong>
                            </div>

                            <div>
                                <small>Tính cách</small>
                                <strong>Biết lắng nghe, ham học hỏi</strong>
                            </div>
                        </div>
                    </aside>

                    <section className="about-panel">
                        <div className="section-label">Thông tin cá nhân</div>

                        <h2>
                            Xin chào, mình là Tài.
                        </h2>

                        <p className="about-text">
                            Mình là người khá trầm tính, thích sự yên tĩnh và luôn cố gắng
                            học hỏi thêm những điều mới trong cuộc sống. Mình yêu thích xem
                            phim hoạt hình 3D, đọc truyện và nghe nhạc vì những sở thích này
                            giúp mình thư giãn, có thêm cảm hứng và mở rộng trí tưởng tượng.
                        </p>

                        <p className="about-text">
                            Trong học tập cũng như công việc, mình luôn cố gắng lắng nghe ý kiến
                            của người khác, đặc biệt là những người có kinh nghiệm hơn mình.
                            Khi chưa biết điều gì, mình sẵn sàng học hỏi, tiếp thu và cải thiện
                            thay vì ngại hỏi hoặc cố chấp với suy nghĩ của bản thân.
                        </p>

                        <div className="about-cards">
                            <div className="about-card">
                                <span>🌟</span>
                                <div>
                                    <h3>Ưu điểm</h3>
                                    <p>
                                        Biết lắng nghe, có tinh thần học hỏi và luôn tôn trọng
                                        những người có hiểu biết, kinh nghiệm hơn mình.
                                    </p>
                                </div>
                            </div>

                            <div className="about-card">
                                <span>📚</span>
                                <div>
                                    <h3>Sở thích cá nhân</h3>
                                    <p>
                                        Mình thích xem phim hoạt hình 3D, đọc truyện và nghe nhạc
                                        vào thời gian rảnh để giải trí và tạo thêm cảm hứng.
                                    </p>
                                </div>
                            </div>

                            <div className="about-card">
                                <span>🌱</span>
                                <div>
                                    <h3>Điểm đang cải thiện</h3>
                                    <p>
                                        Mình đôi khi còn dễ bị ảnh hưởng bởi cảm xúc và chưa chủ động
                                        trong việc giao tiếp xã hội, vì vậy mình đang cố gắng cởi mở
                                        hơn và rèn luyện sự tự tin mỗi ngày.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="interest-box">
                            <h3>Tóm tắt về mình</h3>

                            <div className="interest-list">
                                <span>Nguyễn Tuấn Tài</span>
                                <span>Sinh ngày 09/01</span>
                                <span>Biết lắng nghe</span>
                                <span>Ham học hỏi</span>
                                <span>Thích đọc truyện</span>
                                <span>Thích nghe nhạc</span>
                                <span>Thích phim hoạt hình 3D</span>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Info;