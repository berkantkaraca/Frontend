import { Injectable, signal, computed } from "@angular/core";
import { Ship } from "../Models/Ship";

//Injectable => dependency injection için üretilebilir olduğunu söyler

@Injectable({
    providedIn: "root",
})
export class FabricateService {
    //Gemi imal etme servisi

    //fabricatedShips => imal edilen gemeleri tutar
    private fabricatedShips = signal<Ship[]>([]);

    fabricated = computed(() => this.fabricatedShips());

    //aynı gemi 2 kere imal edilemez
    fabricate(ship: Ship): boolean {
        const already = this.fabricatedShips().some((s) => s.id === ship.id || s.name === ship.name);
        if (already) {
            return false;
        }

        this.fabricatedShips.update(ships => [...ships, ship]);
        return true;
    }

    //yok etmek
    decommissionShip(shipId: number): void {
        this.fabricatedShips.update(ships => ships.filter(s => s.id !== shipId));
    }

    //imal edilen gemi sayısı
    count = computed(() => this.fabricatedShips().length);
}
