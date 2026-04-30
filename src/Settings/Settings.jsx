import "./Settings.css";

function Settings() {
    return (
        <main className="page-shell settings-page">
            <section className="page-card">
                <div className="page-kicker">Cài đặt</div>
                <h1>Cài đặt giao diện</h1>

                <p className="page-desc">
                    Nút sáng/tối đã được đưa ra góc trên bên phải và dùng chung cho toàn bộ trang.
                    Bạn chỉ cần bấm nút đó để đổi giao diện.
                </p>

                <div className="settings-panel">
                    <div>
                        <h3>🌗 Chế độ sáng/tối</h3>
                        <p>Lưu bằng localStorage, chuyển trang vẫn giữ chế độ đã chọn.</p>
                    </div>

                    <div>
                        <h3>📱 Responsive</h3>
                        <p>Giao diện tự co lại trên điện thoại, tablet và desktop.</p>
                    </div>

                    <div>
                        <h3>✨ Hiệu ứng</h3>
                        <p>Giữ hiệu ứng nền, orbit, glow và card kính mờ.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Settings;