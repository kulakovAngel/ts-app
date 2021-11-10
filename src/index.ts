class App {
    public static main(): void {
        const bmv = new Bmv(50);
        const tesla = new TeslaModelX(15);
        const driver1 = new Driver(bmv);
        const driver2 = new Driver(tesla);
        driver1.drive();
        driver2.drive();
    };
}

// typeguard example:
// function isValidField<T>(value: string, obj: T): boolean | never {
//     if (!(value in obj)) {
//         throw new Error('Invalid field!');
//     }
//     return true;
// }

// если все методы абстрактные (abstract) и публичные - то это интерфейс (interface)
abstract class Car {
    public start(): void {
        console.log('Start motion');
        this.motion();
    };

    protected abstract hasFuel(): boolean;
    protected abstract decreaseFuel(): void;

    protected motion(): void {
        if (this.hasFuel()) {
            setTimeout(() => {
                this.decreaseFuel();
                this.motion();
            }, 100);
        } else {
            this.stop();
        }
    };

    public stop(): void {
        console.log('Stopped');
    };
}

class TeslaModelX extends Car {
    public constructor(private batteryVolume: number) {
        super();
    };
    protected hasFuel(): boolean {
        return this.batteryVolume > 0;
    };
    protected decreaseFuel(): void {
        this.batteryVolume--;
    };
}

class Bmv extends Car {
    public constructor(private gasVolume: number) {
        super();
    };
    protected hasFuel(): boolean {
        return this.gasVolume > 0;
    };
    protected decreaseFuel(): void {
        this.gasVolume--;
    };
}

class Driver {
    public constructor(private car: Car) {};

    public drive(): void {
        this.car.start();
    };
}

App.main();