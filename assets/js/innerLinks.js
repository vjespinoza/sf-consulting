const innerLink = () => {
    // const baseURL = "http://127.0.0.1:5500/";
    const baseURL = "http://www.klaudforce.com/";
    const links = {
        es: {
            1: `${baseURL}services/digital-transformation.html`,
            2: `${baseURL}services/data-integration-migration.html`,
            3: `${baseURL}services/e-commerce.html`,
            4: `${baseURL}services/analytics-reports.html`,
            5: `${baseURL}services/integrated-marketing.html`,
            6: `${baseURL}services/mobile-apps.html`,
        },
        en: {
            1: `${baseURL}en/services/digital-transformation.html`,
            2: `${baseURL}en/services/data-integration-migration.html`,
            3: `${baseURL}en/services/e-commerce.html`,
            4: `${baseURL}en/services/analytics-reports.html`,
            5: `${baseURL}en/services/integrated-marketing.html`,
            6: `${baseURL}en/services/mobile-apps.html`,
        },
    };

    // document.location.href = path;
    let targetList = Array.from(
        document.querySelectorAll('[id ^= "service-card"]')
    );

    targetList.map((t) => {
        t.addEventListener("click", (e) => {
            let targetID = e.currentTarget.id.slice(13, 14);

            if (e.currentTarget.id.includes("es")) {
                document.location.href = links.es[targetID];
            } else {
                document.location.href = links.en[targetID];
            }
        });
    });
};

innerLink();
