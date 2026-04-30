import { useEffect, useState } from "react";
import "./ClickRipple.css";

function ClickRipple() {
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        function handlePointerDown(e) {
            if (e.button !== undefined && e.button !== 0) return;

            const id = `${Date.now()}-${Math.random()}`;

            setRipples((prev) => [
                ...prev,
                {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                },
            ]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((item) => item.id !== id));
            }, 900);
        }

        window.addEventListener("pointerdown", handlePointerDown, true);

        return () => {
            window.removeEventListener("pointerdown", handlePointerDown, true);
        };
    }, []);

    return (
        <>
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="global-water-ripple"
                    style={{
                        "--x": `${ripple.x}px`,
                        "--y": `${ripple.y}px`,
                    }}
                ></span>
            ))}
        </>
    );
}

export default ClickRipple;