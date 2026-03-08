class Estudiante {
    private nombre: string;
    private carnet: string;
    public notaFinal: number = 0;

    constructor(nombre:string, carnet:string, notaFinal:number) {
        this.carnet = carnet;
        this.nombre = nombre;
        this.notaFinal = 0;
    }

    mostrarInformacion(nombre: String, carnet: string, notaFinal: number) {
        console.log("Estudiante: " + this.nombre);
        console.log("Carnet " + this.carnet);
        console.log("Nota Final: " + this.notaFinal);
    }

    actualizarNota(nota: number){
        if (nota < 0) {
            console.log("La nota no puede se rmenos a 0")
            return;
        } else {
            this.notaFinal = nota;
        }
    }

    actualizarCarnet(carnet: string){
        this.carnet = carnet
    }
}

const alumno1 = new Estudiante("Requeno","U20240459",7);
const alumno2 = new Estudiante("Juan", "U20250456", 8);
const alumno3 = new Estudiante("Isvi", "U20240498", 9);
// console.log(alumno1.mostrarInformacion());
// console.log(alumno2.mostrarInformacion());
// console.log(alumno3.mostrarInformacion());

// alumno1.actualizarCarnet("U20249586");
// alumno1.actualizarNota(10)
// console.log(alumno1.mostrarInformacion());
