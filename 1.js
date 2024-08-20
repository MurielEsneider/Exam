class Sede {
    constructor(ubicacion) {
        this.ubicacion = ubicacion;
    }
    mostrarInfo() {
        return this.ubicacion;
    }
}

class Compañia {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarInfo() {
        return this.nombre;
    }
}

document.querySelector("#agregar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let ubicacion = document.getElementById("ubicacion").value;
    
    let infoSede = new Sede(ubicacion);
    let infoCompañia = new Compañia(nombre);

    let resultado = "Nombre compañía: "  + infoCompañia.mostrarInfo()
     + ", Ubicación: " +infoSede.mostrarInfo();
    
    document.querySelector("#resultado").innerText = resultado;
});
