import "./Contact.css";

function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-wrapper">
                <div className="contact-layout">
                    <aside className="contact-intro">
                        <div className="contact-badge">Liên hệ</div>

                        <h1>Thông tin liên hệ</h1>

                        <p>
                            Đây là nơi hiển thị các thông tin để người xem có thể liên hệ
                            với mình khi cần trao đổi, kết nối hoặc tìm hiểu thêm về bản thân.
                        </p>

                        <div className="contact-highlight">
                            <span>💬</span>
                            <div>
                                <h3>Sẵn sàng kết nối</h3>
                                <p>
                                    Mình luôn sẵn sàng lắng nghe, học hỏi và trao đổi thêm
                                    trong quá trình học tập, làm việc hoặc phát triển dự án.
                                </p>
                            </div>
                        </div>
                    </aside>

                    <section className="contact-panel">
                        <div className="contact-panel-head">
                            <span>Contact Info</span>
                            <h2>Kết nối với tôi</h2>
                        </div>

                        <div className="contact-list">
                            <div className="contact-card">
                                <div className="contact-icon">📧</div>

                                <div className="contact-content">
                                    <small>Email</small>
                                    <h3>NguyenTuantTai224@gmail.com</h3>
                                    <p>Dùng để trao đổi thông tin hoặc liên hệ cá nhân.</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">📞</div>

                                <div className="contact-content">
                                    <small>Số điện thoại</small>
                                    <h3>0868 807 904</h3>
                                    <p>Có thể liên hệ khi cần trao đổi nhanh.</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">📍</div>

                                <div className="contact-content">
                                    <small>Địa chỉ</small>
                                    <h3>Việt Nam</h3>
                                    <p>Thông tin khu vực sinh sống và học tập hiện tại.</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-message-box">
                            <h3>Ghi chú</h3>
                            <p>
                                Bạn có thể thay email, số điện thoại và địa chỉ bằng thông tin
                                thật của mình để hoàn thiện trang CV cá nhân.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Contact;