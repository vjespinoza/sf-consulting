const langDetector = () => {
    const clientLang = navigator.language;
    if (clientLang.includes("en")) {
        document.location.href = "http://127.0.0.1:5500/en";
    }
};

langDetector();
