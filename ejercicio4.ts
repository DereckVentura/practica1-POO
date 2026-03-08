lass Libro {
    constructor(
        public titulo: string,
        public autor: string,
        private _numeroPaginas: number
    ) {
        this.validarNumeroPaginas(_numeroPaginas);
    }

    get numeroPaginas(): number {
        return this._numeroPaginas;
    }

    set numeroPaginas(value: number) {
        this.validarNumeroPaginas(value);
        this._numeroPaginas = value;
    }

    private validarNumeroPaginas(paginas: number): void {
        if (paginas <= 0) {
            throw new Error("El número de páginas debe ser mayor a cero.");
        }
        
        if (paginas > 10000) {
            console.warn("Advertencia: El número de páginas es muy alto. ¿Estás seguro?");
        }
    }

    mostrarInformacion(): void {
        console.log("📚 INFORMACIÓN DEL LIBRO 📚");
        console.log("═".repeat(30));
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de páginas: ${this._numeroPaginas}`);
        
        // Información adicional
        if (this.esLibroCorto()) {
            console.log("📖 Libro corto");
        } else if (this.esLibroLargo()) {
            console.log("📚 Libro extenso");
        }
        
        console.log("═".repeat(30));
    }

    // Métodos útiles adicionales
    esLibroCorto(): boolean {
        return this._numeroPaginas < 100;
    }

    esLibroLargo(): boolean {
        return this._numeroPaginas > 500;
    }

    obtenerResumen(): string {
        return `${this.titulo} por ${this.autor} (${this._numeroPaginas} páginas)`;
    }
}

// Ejemplo de uso
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 471);
libro1.mostrarInformacion();

const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", 96);
console.log(libro2.obtenerResumen()); // El principito por Antoine de Saint-Exupéry (96 páginas)
console.log(libro2.esLibroCorto()); // true

// Validación en acción
try {
    const libroInvalido = new Libro("Libro inválido", "Autor", -5);
} catch (error) {
    console.log(error.message); // El número de páginas debe ser mayor a cero.
}
