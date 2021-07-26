const es_form = document.getElementById("es_form");
const en_form = document.getElementById("en_form");
const es_form_btn = document.getElementById("es_form_btn");

const formData = () => {
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    return data;
};

const formValidation = () => {
    const data = formData();

    const error = {
        es: {},
        en: {},
    };

    const nameVal = /^[a-z ,.'-]+$/gi;
    const emailVal = /\S+@\S+\.[a-z]+/gi;

    if (!data.name) {
        error.es.name = "Ingresa tu nombre";
        error.en.name = "Enter your name";
    } else if (!nameVal.test(data.name)) {
        error.es.name =
            "El nombre no debe contener números o caracteres especiales";
        error.en.name =
            "The name shouldn't contain numbers or special characters";
    }

    if (!data.email) {
        error.es.mail = "Ingresa tu correo eletrónico";
        error.en.mail = "Enter your email";
    } else if (!emailVal.test(data.email)) {
        error.es.mail = "La dirección de correo eletrónico no es valida";
        error.en.mail = "The email is not valid";
    }

    if (!data.subject) {
        error.es.subject = "El campo de asunto está vacio";
        error.en.subject = "The subject field is empty";
    }

    if (!data.message) {
        error.es.message = "Por favor dejanos un mensaje";
        error.en.message = "Please leave us a message";
    }

    return error;
};

const errorAlerts = (errors, lang) => {
    let list = Object.values(errors[lang]);
    let text = "";
    let swalTitle = lang === "es" ? "Algo salió mal!" : "Something went wrong!";

    if (Object.values(errors[lang]).length !== 0) {
        for (let item of list) {
            text += `<li>${item}.</li>`;
        }
        Swal.fire({
            title: swalTitle,
            html: text,
            icon: "error",
        });
    }
};

if (es_form) {
    es_form_btn.addEventListener("click", (e) => {
        const errors = formValidation();
        const modal = errorAlerts(errors, "es");

        Object.keys(errors).length === 0 ? e.preventDefault() : modal;
    });
} else {
    en_form_btn.addEventListener("click", (e) => {
        const errors = formValidation();
        const modal = errorAlerts(errors, "en");

        Object.keys(errors).length === 0 ? e.preventDefault() : modal;
    });
}
