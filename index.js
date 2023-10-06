var sumaEdad = 0;
var edadPromedio = 0;
var cantidadJugadores = 0;
var jugadoresactuales = [];
function objJugador(equipo, nombre, edad) {
    this.equipo = equipo;
    this.nombre = nombre;
    this.edad = edad;
}
var nombreEquipo = prompt("Ingrese el nombre del equipo");

for (let i = 1; i < 16; i++){
    let jugador = prompt("Ingrese Nombre y apellido del jugador. Si no hay mas jugadores escriba ESC.");
    let edad = Number(prompt("Ingrese la edad del jugador. Si no hay mas jugadores escriba ESC."));
    var nuevoJugador = new objJugador (nombreEquipo, jugador, edad)
    jugadoresactuales.push(nuevoJugador);

    if (jugador == "ESC" || edad == "ESC"){
        console.log("Este es tu equipo final.");
        edadPromedio = promediante(sumaEdad, cantidadJugadores);
        console.log("Tu equipo llamado " + nombreEquipo + " esta conformado por " + (cantidadJugadores) + " jugadores y la edad promedio es de " + edadPromedio + " anios");
        console.log("Estos son tus jugadores actuales: ");
        for (let i = 0; i < jugadoresactuales.length; i++) {
            console.log(jugadoresactuales[i].nombre);
        }
        break          
    }
    else {
        let anios = parseInt(edad);
        sumaEdad = sumaEdad + anios;
        cantidadJugadores = cantidadJugadores + 1;
        console.log("Jugador numero " + i + " " + jugador + ". Edad: " + anios);
    }
}
function promediante(sumEdad, cantJug){
return sumEdad / cantJug
}

const diviA = ["equipo 1", "equipo 2", "equipo 3"];
const diviB = ["equipo 1", "equipo 2", "equipo 3"];
const diviC = ["equipo 1", "equipo 2", "equipo 3"];
const diviD = ["equipo 1", "equipo 2", "equipo 3"];
const diviE = ["equipo 1", "equipo 2", "equipo 3"];


if (edadPromedio <= 15){
    diviA.push(nombreEquipo);
    console.log("Tu equipo entra en la categoria A y estos son tus rivales:");
    console.table(diviA);
} else if (edadPromedio > 15 || edadPromedio <= 18){
    diviB.push(nombreEquipo);
    console.log("Tu equipo entra en la categoria B y estos son tus rivales:");
    console.table(diviB);
} else if (edadPromedio > 18 || edadPromedio <= 35){
    diviC.push(nombreEquipo);
    console.log("Tu equipo entra en la categoria C y estos son tus rivales:");
    console.table(diviC);
} else if (edadPromedio > 35 || edadPromedio <= 50){
    diviD.push(nombreEquipo);
    console.log("Tu equipo entra en la categoria D y estos son tus rivales:");
    console.table(diviD);
} else if (edadPromedio > 50){
    diviE.push(nombreEquipo);
    console.log("Tu equipo entra en la categoria E y estos son tus rivales:");
    console.table(diviE);
}

const listaEquipos = [];

function Equipo(nameEquipo, edadProm, cantJug, jugadores) {
    this.nameEquipo = nameEquipo;
    this.edadProm = edadProm;
    this.cantJug = cantJug;
    this.jugadores = jugadores;
  }

var nuevoEquipo = new Equipo(nombreEquipo, edadPromedio, cantidadJugadores, jugadoresactuales);

listaEquipos.push(nuevoEquipo);

for (let i = 0; i <= listaEquipos.length; i++){
    var equipo = listaEquipos[i];
    if (Equipo.edadProm <= 15){
        diviA.push(Equipo);
        if (diviA.length > 0){
            console.log("Tu equipo entra en la categoria A y estos son tus rivales:");
            console.table(diviA);
        }   else {
            console.log("Eres el unico equipo en esta categoria.");
            }
    } else if (Equipo.edadProm > 15 || Equipo.edadProm <= 18){
        diviB.push(Equipo);
        if (diviB.length > 0){
            console.log("Tu equipo entra en la categoria B y estos son tus rivales:");
            console.table(diviB);
        }  else {
            console.log("Eres el unico equipo en esta categoria.");
            }
    }  else if (Equipo.edadProm > 18 || Equipo.edadProm <= 35){
        diviC.push(Equipo);
        if (diviC.length > 0){
            console.log("Tu equipo entra en la categoria C y estos son tus rivales:");
            console.table(diviC);
        }  else {
            console.log("Eres el unico equipo en esta categoria.");
            }
    } else if (Equipo.edadProm > 35 || Equipo.edadProm <= 50){
        diviD.push(Equipo);
        if (diviD.length > 0){
            console.log("Tu equipo entra en la categoria D y estos son tus rivales:");
            console.table(diviD);
        }  else {
            console.log("Eres el unico equipo en esta categoria.");
            }
    } else if (Equipo.edadProm < 50){
        diviE.push(Equipo);
        if (diviE.length > 0){
            console.log("Tu equipo entra en la categoria E y estos son tus rivales:");
            console.table(diviE);
        }  else {
            console.log("Eres el unico equipo en esta categoria.");
            }
    }
}
