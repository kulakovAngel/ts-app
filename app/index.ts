class App {
    static main(): void {
        const bmv = new Bmv(50);
        console.log(bmv);
    }
}

class Bmv {
    gasTankVolume: number;
    constructor(gasTankVolume: number) {
        this.gasTankVolume = gasTankVolume;
    }
}

App.main();