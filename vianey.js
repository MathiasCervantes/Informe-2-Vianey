//Script del Formulario-->

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_registro").addEventListener("submit", function(event){
        event.preventDefault(); 

        var genero = document.getElementById("genero").value; 
        var nombre_apellidos = document.getElementById("nombre_apellidos").value;
        var FechaNac = document.getElementById("FechaNac").value; 
        var dni = document.getElementById("dni").value;
        var telefono = document.getElementById("telefono").value;
        var nacionalidad = document.getElementById("nacionalidad").value;
        var correo = document.getElementById("correo").value;
        var mensaje = "";

                

        var NacLowCa = nacionalidad.toLowerCase();
                
        if (NacLowCa !== "peruana" && NacLowCa !== "peruano" && NacLowCa !== "perú" && NacLowCa !== "peru") {
            alert("Lo sentimos, solo se admite Nacionalidad Peruana.");
            mensaje = "rechazado";
            return;
        }

        var nacimiento = new Date(FechaNac);
        var hoy = new Date();
        var edad = hoy.getFullYear() - nacimiento.getFullYear();
        var mayor = hoy.getMonth() - nacimiento.getMonth();
        if (mayor < 0 || (mayor === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        if (edad >= 18) {
            var HoM = (genero === "Masculino") ? "Sr." : "Sra."; 
            alert("Felicidades, " + HoM + " " + nombre_apellidos.split(" ")[0] + " , Ha sido aceptado para asistir al evento de seminario de preocesamiento de lenguaje natural.");
            mensaje = "Aceptado";
        } else {
            alert("Lo sentimos, no cuenta con la edad requerida para ser aceptado.");
            mensaje = "Rechazado";
        }

        const tablebody2 = document.createElement('tr');
        const tablebody = document.getElementById("tablebody");
        tablebody2.innerHTML = `
            <tr> 
                <td>${genero}</td>
                <td>${nombre_apellidos}</td>
                <td>${dni}</td>
                <td>${correo}</td>
                <td>${nacionalidad}</td>
                <td>${FechaNac}</td>
                <td>${telefono}</td>
                <td>${mensaje}</td>
            </tr>
        `;
        tablebody.appendChild(tablebody2);
                
        document.getElementById("tabla_datos").style.display = "";
    });
});