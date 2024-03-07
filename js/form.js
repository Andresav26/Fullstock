const nombre = document.querySelector("#nombre");
const form = document.querySelector("#form");
const apellido = document.querySelector("#apellido");
const contra = document.querySelector("#password");
const nivelContra = document.querySelector("#nivelContra");

nombre.addEventListener("input", function(event) {
    event.preventDefault();
});
apellido.addEventListener("input", function(event) {
    event.preventDefault();
});

function registrarUsuario(event) {
    event.preventDefault();
    if (nombre.value.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
    } else if (apellido.value.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres");
    } else {
        const nivel = evaluarFortalezaContrasena(contra.value);
        if (nivel === "debil") {
            nivelContra.innerHTML = "<p style='color: red;'>Contraseña débil</p>";
        } else if (nivel === "intermedia") {
            nivelContra.innerHTML = "<p style='color: yellow;'>Contraseña intermedia</p>";
        } else if (nivel === "fuerte") {
            nivelContra.innerHTML = "<p style='color: green;'>Contraseña fuerte</p>";
            alert("Formulario exitoso");
            form.reset(); // Resetea el formulario después de enviarlo
        }
    }
}

contra.addEventListener("input", function() {
    const nivel = evaluarFortalezaContrasena(contra.value);
    if (nivel === "debil") {
        nivelContra.innerHTML = "<p style='color: red;'>Contraseña débil</p>";
    } else if (nivel === "intermedia") {
        nivelContra.innerHTML = "<p style='color: yellow;'>Contraseña intermedia</p>";
    } else if (nivel === "fuerte") {
        nivelContra.innerHTML = "<p style='color: green;'>Contraseña fuerte</p>";
    }
});

function evaluarFortalezaContrasena(contra) {
    if (contra.length < 6) {
        return "debil";
    } else if (contra.length < 10) {
        return "intermedia";
    } else {
        return "fuerte";
    }
}

form.addEventListener("submit", registrarUsuario);
