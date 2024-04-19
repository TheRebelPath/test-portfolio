import { useRef, useEffect } from "react";

const renderMatrix = (ref) => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
        
    }

    const render = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "#2be4f7"; // font color
        context.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            // randomize the string of characters to render
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    const intervalId = setInterval(render, 35);
    return () => {
        clearInterval(intervalId); // Cleanup: Clear the interval when component unmounts
    };
};

const MatrixBackground = () => {
    const ref = useRef();
    const thisClassName = "absolute w-full h-full  object-cover -z-10 bg-transparent"
    useEffect(() => {
        const cleanup = renderMatrix(ref);

        return () => {
            cleanup(); // Cleanup: Call the cleanup function returned by renderMatrix
        };
    }, []);
    return (
            <canvas  className={thisClassName} ref={ref} />
    );
};

export default MatrixBackground;

