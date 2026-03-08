class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        private _anio: number
    ) {}

    get anio(): number {
        return this._anio;
    }

    set anio(value: number) {
        const anioActual = new Date().getFullYear();
        
        if (value < 1900 || value > anioActual + 1) {
            console.log(`Año inválido. Debe estar entre 1900 y ${anioActual + 1}`);
            return;
        }
        
        this._anio = value;
    }

    mostrarInformacion(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo} - Año ${this._anio}`);
    }

    // Método adicional útil
    esAntiguo(): boolean {
        const anioActual = new Date().getFullYear();
        return (anioActual - this._anio) > 15;
    }
}

// Ejemplo de uso
const vehiculo = new Vehiculo("Toyota", "Corolla", 2020);
vehiculo.mostrarInformacion();  // Vehículo: Toyota Corolla - Año 2020
console.log(vehiculo.anio);      // 2020 (accede mediante getter)
vehiculo.anio = 2023;            // Año actualizado mediante setter
vehiculo.mostrarInformacion();   // Vehículo: Toyota Corolla - Año 2023

// Intento de año inválido
vehiculo.anio = 1800;  // Año inválido. Debe estar entre 1900 y 2025

// Usando método adicional
console.log(vehiculo.esAntiguo()); // false
