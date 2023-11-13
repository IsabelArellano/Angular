export class Ceo {

    private static nextId: number = 1;

    id: number = 0;
    nombre_completo: string = "";
    cargo: string = "";
    especialidad: string = "";
    imagen: URL | string = "";

    constructor(nombre_completo: string, cargo: string, especialidad: string, imagen: URL | string) {
        this.id = Ceo.nextId++;
        this.nombre_completo = nombre_completo;
        this.cargo = cargo;
        this.especialidad = especialidad;
        this.imagen = imagen;
    }
}
