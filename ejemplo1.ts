class Producto {
    nombre: string;
    precio: number
    cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal(): number {
        return this.precio * this.cantidad;
    }   

    mostrarDetalle(): void {
        console.log("Producto: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("Cantidad: " + this.cantidad);
        console.log("Total: " + this.calcularTotal());
    }
}

const producto1 = new Producto("Laptop", 1000, 2);
producto1.mostrarDetalle();
