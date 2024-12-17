// CONST
const CONST_PUBLIC_ID = "k5v9XjkoPCT9ETRhR";
const CONST_TEMPLATE_ID = "template_svysyag";
const CONST_SERVICE_ID = "service_j0ycutd";

// FORMULARIO
const btnRegistro = $("#btnRegistro");
const txtRegistro = $("#txtRegistro");

btnRegistro.click(function () {
    fncMain(txtRegistro.val());
});

function fncMain(message) {
    if (fncValidaciones()) {
        emailjs.init({ publicKey: CONST_PUBLIC_ID });
        fncEnviarCorreo(message);
    }
}

function fncEnviarCorreo(message) {
    const CONST_FROM_NAME = "INTERCAMBIO";
    const CONST_FROM_EMAIL = "OmarNnzV@gmail.com";

    emailjs.send(CONST_SERVICE_ID, CONST_TEMPLATE_ID, {
        from_name: CONST_FROM_NAME,
        from_email: CONST_FROM_EMAIL,
        message: message
    }).then(function () {
        fncAlert2Exito();
        fncLimpiarFormulario();
    }, function (error) {
        fncAlert2WarningError(`Ocurrió un error al enviar el correo: ${JSON.stringify(error)}`);
    });
}

function fncAlert2Exito() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se ha registrado con éxito",
        showConfirmButton: false,
        timer: 3000
    });
}

function fncAlert2WarningError(msj, esError) {
    let ico = esError ? "error" : "warning";
    Swal.fire({
        icon: ico,
        title: "Ocurrió un error",
        text: msj
    });
}

function fncValidaciones() {
    let esExito = false;
    if (txtRegistro.val() == "") { fncAlert2WarningError("Es necesario indicar un nombre."); } else { esExito = true; }

    return esExito;
}

function fncLimpiarFormulario() {
    txtRegistro.val("");
}