const API_URL = "http://localhost:4000/api/portfolio";
const JSON_FILE_URL = "/data/NguyenTuanTai_CV.json";

const emptyData = {
    projects: [],
    socials: [],
    skills: []
};

function normalizeData(data) {
    return {
        projects: Array.isArray(data?.projects) ? data.projects : [],
        socials: Array.isArray(data?.socials) ? data.socials : [],
        skills: Array.isArray(data?.skills) ? data.skills : []
    };
}

export async function getPortfolioData() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Không đọc được API.");
        }

        const data = await response.json();
        return normalizeData(data);
    } catch {
        try {
            const response = await fetch(JSON_FILE_URL);

            if (!response.ok) {
                return emptyData;
            }

            const data = await response.json();
            return normalizeData(data);
        } catch {
            return emptyData;
        }
    }
}

export async function savePortfolioData(data) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(normalizeData(data))
    });

    if (!response.ok) {
        throw new Error("Không ghi được vào NguyenTuanTai_CV.json. Kiểm tra server đã chạy chưa.");
    }

    const result = await response.json();
    const savedData = normalizeData(result.data);

    window.dispatchEvent(
        new CustomEvent("portfolio-data-changed", {
            detail: savedData
        })
    );

    return savedData;
}

export async function resetPortfolioData() {
    const data = await getPortfolioData();

    window.dispatchEvent(
        new CustomEvent("portfolio-data-changed", {
            detail: data
        })
    );

    return data;
}