import avatarImg from "../../assets/image/anh-1.png"
import "./Social.css";

function Social() {
    const socials = [
        {
            icon: "f",
            name: "Facebook",
            desc: "Trang cá nhân Facebook",
            value: "facebook.com/kun.22tuoi",
            url: "https://www.facebook.com/kun.22tuoi/",
        },
        {
            icon: "⌘",
            name: "GitHub",
            desc: "Nơi lưu trữ các dự án lập trình",
            value: "github.com/NguyenTuanTai22",
            url: "https://github.com/NguyenTuanTai22",
        },
        {
            icon: "♪",
            name: "TikTok",
            desc: "Nội dung giải trí và cá nhân",
            value: "tiktok.com/@dung.tim.den.toi",
            url: "https://www.tiktok.com/@dung.tim.den.toi",
        },
        {
            icon: "Z",
            name: "Zalo",
            desc: "Liên hệ qua Zalo",
            value: "zalo.me/0868807904",
            url: "https://zalo.me/0868807904",
        },
    ];

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
                            Bạn có thể thay các đường dẫn bên dưới bằng link thật
                            để người xem dễ dàng liên hệ, theo dõi hoặc xem các dự án của mình.
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
                            {socials.map((item) => (
                                <a
                                    className="social-card"
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={item.name}
                                >
                                    <div className="social-icon">{item.icon}</div>

                                    <div className="social-content">
                                        <h3>{item.name}</h3>
                                        <p>{item.desc}</p>
                                        <strong>{item.value}</strong>
                                    </div>

                                    <div className="social-arrow">↗</div>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Social;