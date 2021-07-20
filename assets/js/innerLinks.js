const baseURL = "http://127.0.0.1:5500/services/";
const links = {
    analytics: `${baseURL}analytics-reports.html`,
    integration: `${baseURL}data-integration-migration.html`,
    transformation: `${baseURL}digital-transformation.html`,
    ecommerce: `${baseURL}e-commerce.html`,
    marketing: `${baseURL}integrated-marketing.html`,
    mobile: `${baseURL}mobile-apps.html`,
};

const innerLink = (path) => {
    // document.location.href(path);
    document.location.href = path;
    console.log(path);
};

document
    .getElementById("service-card-1")
    .addEventListener("click", () => innerLink(links.transformation));
document
    .getElementById("service-card-2")
    .addEventListener("click", () => innerLink(links.integration));
document
    .getElementById("service-card-3")
    .addEventListener("click", () => innerLink(links.ecommerce));
document
    .getElementById("service-card-4")
    .addEventListener("click", () => innerLink(links.analytics));
document
    .getElementById("service-card-5")
    .addEventListener("click", () => innerLink(links.marketing));
document
    .getElementById("service-card-6")
    .addEventListener("click", () => innerLink(links.mobile));
