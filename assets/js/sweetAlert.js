const content = {
    consulting: { title: "aaa", text: "111" },
    planning: { title: "bbb", text: "222" },
    development: { title: "ccc", text: "333" },
    implementation: { title: "ddd", text: "444" },
};

const serviceContent = (content) => {
    Swal.fire({
        title: content.title,
        text: content.text,
        icon: "warning",
        confirmButtonText: "Cool",
    });
};

document
    .getElementById("service-card-1")
    .addEventListener("click", () => serviceContent(content.consulting));
document
    .getElementById("service-card-2")
    .addEventListener("click", () => serviceContent(content.planning));
document
    .getElementById("service-card-3")
    .addEventListener("click", () => serviceContent(content.development));
document
    .getElementById("service-card-4")
    .addEventListener("click", () => serviceContent(content.implementation));
