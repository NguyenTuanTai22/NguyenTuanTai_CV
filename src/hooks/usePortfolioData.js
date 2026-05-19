import { useEffect, useState } from "react";
import { getPortfolioData } from "../services/portfolioStore";

const defaultData = {
    projects: [],
    socials: [],
    skills: []
};

export function usePortfolioData() {
    const [data, setData] = useState(defaultData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let alive = true;

        async function loadData() {
            try {
                const result = await getPortfolioData();

                if (alive) {
                    setData(result);
                }
            } finally {
                if (alive) {
                    setLoading(false);
                }
            }
        }

        function handleDataChanged(event) {
            if (event.detail) {
                setData(event.detail);
            } else {
                loadData();
            }
        }

        loadData();

        window.addEventListener("portfolio-data-changed", handleDataChanged);

        return () => {
            alive = false;
            window.removeEventListener("portfolio-data-changed", handleDataChanged);
        };
    }, []);

    return {
        data,
        loading
    };
}