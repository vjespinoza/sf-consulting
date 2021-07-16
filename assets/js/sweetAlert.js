const content = {
    design: {
        html: `
        <div class='phase-description'>
            <h2>01- Diseño</h2>
            <p>Ya sea que se necesite conocer los beneficios de implementar soluciones Salesforce, o buscar maneras de optimizar su utilización, la asesoría especializada de Klaudforce permite a las organizaciones identificar la mejor opción según sus características propias y objetivos de negocio.</p>
            <p>En esta etapa analizamos los objetivos de tu organización, sus oportunidades de mejora y sus fortalezas con el objetivo de optimizar cada proceso, definir las herramientas Salesforce apropiadas y planificar las acciones necesarias para lograr resultados asombrosos.</p>
        </div>
        `,
    },
    develop: {
        html: `
        <div class='phase-description'>
            <h2>02 - Desarrollo</h2>
            <p>Los expertos de Klaudforce ponen manos a la obra para crear todos los elementos necesarios para generar una solución Salesforce adecuada para tu empresa, basada en las decisiones tomadas en la fase de diseño.</p>
            <p>Es aquí donde realizamos todo el trabajo, que detrás de cámara, potenciará a tu empresa aprovechando al máximo las capacidades de Salesforce.</p>
            <p>Cada componente desarrollado está cuidadosamente pensado para encajar a la perfección dentro de tus procesos de negocio, una vez se haya realizado la implementación.</p>
            </div>
            `,
    },
    implement: {
        html: `
        <div class='phase-description'>
            <h2>03 - Implementación</h2>
            <p>Desde el desarrollo de componentes personalizados, hasta configuraciones avanzadas en la plataforma, nosotros nos encargamos de todos los detalles técnicos para facilitar la vida de tus empleados y colaboradores desde el primer día.</p>
            <p>Nuestro enfoque asegura que la solución generada se integre de manera inmediata y sin inconvenientes con tu negocio, potenciando significativamente la efectividad y eficacia de cada uno de tus procesos internos.</p>
        </div>
        `,
    },
};

const serviceContent = (content) => {
    Swal.fire({
        html: content.html,
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
    });
};

document
    .getElementById("service-card-1")
    .addEventListener("click", () => serviceContent(content.design));
document
    .getElementById("service-card-2")
    .addEventListener("click", () => serviceContent(content.develop));
document
    .getElementById("service-card-3")
    .addEventListener("click", () => serviceContent(content.implement));
