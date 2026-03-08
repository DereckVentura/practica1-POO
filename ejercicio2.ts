class CuentaBancaria {
    private _saldo: number;

    constructor(
        public titular: string, 
        saldoInicial: number
    ) {
        this._saldo = saldoInicial;
    }

    get saldo(): number {
        return this._saldo;
    }

    depositar(monto: number): void {
        if (monto <= 0) {
            console.log("El monto a depositar debe ser positivo.");
            return;
        }
        
        this._saldo += monto;
        console.log("Depósito realizado correctamente.");
    }

    retirar(monto: number): void {
        if (monto <= 0) {
            console.log("El monto a retirar debe ser positivo.");
            return;
        }

        if (monto <= this._saldo) {
            this._saldo -= monto;
            console.log("Retiro realizado correctamente.");
        } else {
            console.log("Fondos insuficientes.");
        }
    }

    mostrarSaldo(): void {
        console.log(`Saldo actual de ${this.titular}: $${this._saldo}`);
    }
}

// Ejemplo de uso
const cuenta = new CuentaBancaria("Juan Pérez", 1000);
cuenta.mostrarSaldo();     // Saldo actual de Juan Pérez: $1000
cuenta.depositar(500);      // Depósito realizado correctamente.
cuenta.retirar(200);        // Retiro realizado correctamente.
cuenta.retirar(2000);       // Fondos insuficientes.
console.log(cuenta.saldo);  // 1300 (solo lectura)
