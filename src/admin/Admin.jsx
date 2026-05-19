import { useEffect, useState } from "react";
import {
    getPortfolioData,
    savePortfolioData
} from "../services/portfolioStore";
import "./Admin.css";

const defaultData = {
    projects: [],
    socials: [],
    skills: []
};

const sectionConfigs = {
    projects: {
        title: "Quản lý dự án",
        badge: "Projects",
        desc: "Sửa danh sách dự án hiển thị ở trang Projects.",
        addText: "Thêm dự án",
        emptyItem: {
            icon: "✨",
            title: "Dự án mới",
            desc: "Mô tả ngắn cho dự án mới."
        },
        fields: [
            { name: "icon", label: "Icon", placeholder: "VD: 📘" },
            { name: "title", label: "Tên dự án", placeholder: "VD: Website học từ vựng" },
            { name: "desc", label: "Mô tả", type: "textarea", placeholder: "Nhập mô tả ngắn cho dự án..." }
        ]
    },
    socials: {
        title: "Quản lý mạng xã hội",
        badge: "Socials",
        desc: "Sửa các liên kết hiển thị ở trang Social.",
        addText: "Thêm liên kết",
        emptyItem: {
            icon: "↗",
            name: "Tên mạng xã hội",
            desc: "Mô tả liên kết.",
            value: "example.com",
            url: "https://example.com"
        },
        fields: [
            { name: "icon", label: "Icon", placeholder: "VD: f, Z, ♪" },
            { name: "name", label: "Tên", placeholder: "VD: Facebook" },
            { name: "desc", label: "Mô tả", type: "textarea", placeholder: "Nhập mô tả liên kết..." },
            { name: "value", label: "Tên hiển thị", placeholder: "VD: facebook.com/abc" },
            { name: "url", label: "Đường dẫn", placeholder: "VD: https://facebook.com/abc" }
        ]
    },
    skills: {
        title: "Quản lý kỹ năng",
        badge: "Skills",
        desc: "Sửa danh sách kỹ năng hiển thị ở trang Skills.",
        addText: "Thêm kỹ năng",
        emptyItem: {
            icon: "⚡",
            name: "Kỹ năng mới",
            level: "Đang học",
            percent: "50%"
        },
        fields: [
            { name: "icon", label: "Icon", placeholder: "VD: ⚛️" },
            { name: "name", label: "Tên kỹ năng", placeholder: "VD: ReactJS" },
            { name: "level", label: "Mức độ", placeholder: "VD: Đang phát triển" },
            { name: "percent", label: "Phần trăm", placeholder: "VD: 80 hoặc 80%" }
        ]
    }
};

const tabItems = [
    { key: "projects", icon: "📘", label: "Dự án" },
    { key: "socials", icon: "🌐", label: "Mạng xã hội" },
    { key: "skills", icon: "⚡", label: "Kỹ năng" }
];

function Admin() {
    const [activeTab, setActiveTab] = useState("projects");
    const [data, setData] = useState(defaultData);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    const currentConfig = sectionConfigs[activeTab];
    const currentItems = data[activeTab] || [];

    useEffect(() => {
        let alive = true;

        async function loadData() {
            try {
                const result = await getPortfolioData();

                if (alive) {
                    setData(result);
                }
            } catch (error) {
                if (alive) {
                    setMessage(error.message || "Không tải được dữ liệu JSON.");
                }
            } finally {
                if (alive) {
                    setLoading(false);
                }
            }
        }

        loadData();

        return () => {
            alive = false;
        };
    }, []);

    function createId() {
        return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }

    function getItemTitle(item) {
        return item.title || item.name || "Mục chưa đặt tên";
    }

    function getItemDesc(item) {
        return item.desc || item.level || item.value || "Chưa có mô tả.";
    }

    function updateItem(index, fieldName, value) {
        setData((prev) => {
            const nextItems = [...(prev[activeTab] || [])];

            nextItems[index] = {
                ...nextItems[index],
                [fieldName]: value
            };

            return {
                ...prev,
                [activeTab]: nextItems
            };
        });

        setMessage("");
    }

    function addItem() {
        setData((prev) => {
            const nextItem = {
                id: createId(),
                ...currentConfig.emptyItem
            };

            return {
                ...prev,
                [activeTab]: [...(prev[activeTab] || []), nextItem]
            };
        });

        setMessage("");
    }

    function removeItem(index) {
        setData((prev) => {
            const nextItems = (prev[activeTab] || []).filter(
                (_, itemIndex) => itemIndex !== index
            );

            return {
                ...prev,
                [activeTab]: nextItems
            };
        });

        setMessage("");
    }

    function moveItem(index, direction) {
        setData((prev) => {
            const nextItems = [...(prev[activeTab] || [])];
            const targetIndex = index + direction;

            if (targetIndex < 0 || targetIndex >= nextItems.length) {
                return prev;
            }

            const current = nextItems[index];
            nextItems[index] = nextItems[targetIndex];
            nextItems[targetIndex] = current;

            return {
                ...prev,
                [activeTab]: nextItems
            };
        });

        setMessage("");
    }

    async function handleSave() {
        try {
            setSaving(true);

            const saved = await savePortfolioData(data);

            setData(saved);
            setMessage("Đã lưu trực tiếp vào NguyenTuanTai_CV.json.");
        } catch (error) {
            setMessage(error.message || "Không lưu được vào JSON.");
        } finally {
            setSaving(false);
        }
    }

    async function handleReloadJson() {
        try {
            setLoading(true);

            const result = await getPortfolioData();

            setData(result);
            setMessage("Đã tải lại dữ liệu từ NguyenTuanTai_CV.json.");
        } catch (error) {
            setMessage(error.message || "Không tải lại được JSON.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <main className="admin-page">
                <div className="admin-bg" aria-hidden="true">
                    <span className="admin-light admin-light-1"></span>
                    <span className="admin-light admin-light-2"></span>
                    <span className="admin-light admin-light-3"></span>
                </div>

                <section className="admin-shell">
                    <div className="admin-empty">
                        Đang tải dữ liệu từ NguyenTuanTai_CV.json...
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="admin-page">
            <div className="admin-bg" aria-hidden="true">
                <span className="admin-light admin-light-1"></span>
                <span className="admin-light admin-light-2"></span>
                <span className="admin-light admin-light-3"></span>
            </div>

            <div className="admin-particles" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, index) => (
                    <span
                        key={index}
                        style={{
                            "--left": `${(index * 13 + 8) % 100}%`,
                            "--size": `${4 + (index % 4)}px`,
                            "--duration": `${12 + (index % 6) * 2}s`,
                            "--delay": `${index * 0.45}s`,
                            "--move": `${index % 2 === 0 ? "-" : ""}${24 + index * 3}px`
                        }}
                    ></span>
                ))}
            </div>

            <section className="admin-hero">
                <div className="admin-hero-main">
                    <p className="admin-kicker">Admin Panel</p>

                    <h1>Quản lý dữ liệu CV</h1>

                    <p>
                        Chỉnh sửa dự án, mạng xã hội và kỹ năng. Khi bấm lưu,
                        dữ liệu sẽ được ghi vào file NguyenTuanTai_CV.json.
                    </p>
                </div>

                <div className="admin-hero-card">
                    <span>{currentItems.length}</span>
                    <p>Mục đang quản lý</p>
                </div>
            </section>

            <section className="admin-shell">
                <aside className="admin-tabs">
                    {tabItems.map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            className={activeTab === tab.key ? "active" : ""}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </aside>

                <section className="admin-panel">
                    <div className="admin-panel-head">
                        <div>
                            <small>{currentConfig.badge}</small>
                            <h2>{currentConfig.title}</h2>
                            <p>{currentConfig.desc}</p>
                        </div>

                        <button type="button" className="admin-add-btn" onClick={addItem}>
                            + {currentConfig.addText}
                        </button>
                    </div>

                    <div className="admin-list">
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <article
                                    className="admin-edit-card"
                                    key={item.id || `${activeTab}-${index}`}
                                >
                                    <div className="admin-card-shine"></div>

                                    <div className="admin-edit-preview">
                                        <div className="admin-preview-icon">
                                            {item.icon || "✨"}
                                        </div>

                                        <div className="admin-preview-content">
                                            <div className="admin-preview-top">
                                                <span>#{index + 1}</span>
                                                <small>{currentConfig.badge}</small>
                                            </div>

                                            <h3>{getItemTitle(item)}</h3>
                                            <p>{getItemDesc(item)}</p>
                                        </div>

                                        <div className="admin-actions">
                                            <button
                                                type="button"
                                                onClick={() => moveItem(index, -1)}
                                                disabled={index === 0}
                                            >
                                                ↑
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => moveItem(index, 1)}
                                                disabled={index === currentItems.length - 1}
                                            >
                                                ↓
                                            </button>

                                            <button
                                                type="button"
                                                className="danger"
                                                onClick={() => removeItem(index)}
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    </div>

                                    <div className="admin-form-box">
                                        <div className="admin-form-title">
                                            <span></span>
                                            <strong>Thông tin chỉnh sửa</strong>
                                        </div>

                                        <div className="admin-form-grid">
                                            {currentConfig.fields.map((field) => (
                                                <label
                                                    className={
                                                        field.type === "textarea"
                                                            ? "admin-field full"
                                                            : "admin-field"
                                                    }
                                                    key={field.name}
                                                >
                                                    <span>{field.label}</span>

                                                    {field.type === "textarea" ? (
                                                        <textarea
                                                            value={item[field.name] || ""}
                                                            placeholder={field.placeholder}
                                                            onChange={(event) =>
                                                                updateItem(
                                                                    index,
                                                                    field.name,
                                                                    event.target.value
                                                                )
                                                            }
                                                        />
                                                    ) : (
                                                        <input
                                                            value={item[field.name] || ""}
                                                            placeholder={field.placeholder}
                                                            onChange={(event) =>
                                                                updateItem(
                                                                    index,
                                                                    field.name,
                                                                    event.target.value
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="admin-empty">
                                Chưa có dữ liệu trong mục này. Hãy bấm thêm mới.
                            </div>
                        )}
                    </div>

                    <div className="admin-bottom">
                        <div className="admin-message">
                            {message ||
                                "Sau khi chỉnh sửa, bấm Lưu thay đổi để cập nhật file JSON."}
                        </div>

                        <div className="admin-save-group">
                            <button
                                type="button"
                                className="admin-reset-btn"
                                onClick={handleReloadJson}
                            >
                                Tải lại JSON
                            </button>

                            <button
                                type="button"
                                className="admin-save-btn"
                                onClick={handleSave}
                                disabled={saving}
                            >
                                {saving ? "Đang lưu..." : "Lưu thay đổi"}
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Admin;