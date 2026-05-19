import express from "express";
import cors from "cors";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FILE JSON BẠN ĐANG DÙNG
const DATA_FILE = path.resolve(__dirname, "../public/data/NguyenTuanTai_CV.json");

app.use(cors());
app.use(express.json({ limit: "2mb" }));

function normalizeData(data) {
    return {
        projects: Array.isArray(data?.projects) ? data.projects : [],
        socials: Array.isArray(data?.socials) ? data.socials : [],
        skills: Array.isArray(data?.skills) ? data.skills : []
    };
}

async function readJsonFile() {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
}

async function writeJsonFile(data) {
    const safeData = normalizeData(data);
    const jsonText = JSON.stringify(safeData, null, 4);

    await fs.writeFile(DATA_FILE, jsonText, "utf-8");

    return safeData;
}

app.get("/api/portfolio", async (req, res) => {
    try {
        const data = await readJsonFile();
        res.json(normalizeData(data));
    } catch (error) {
        res.status(500).json({
            message: "Không đọc được file NguyenTuanTai_CV.json.",
            error: error.message
        });
    }
});

app.post("/api/portfolio", async (req, res) => {
    try {
        const savedData = await writeJsonFile(req.body);

        res.json({
            message: "Đã lưu vào NguyenTuanTai_CV.json.",
            data: savedData
        });
    } catch (error) {
        res.status(500).json({
            message: "Không ghi được file NguyenTuanTai_CV.json.",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`JSON API đang chạy tại http://localhost:${PORT}`);
});