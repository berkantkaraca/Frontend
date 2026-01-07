import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Ship } from '../../Models/Ship';
import { Ships } from '../../Data/ShipData';
import { FabricateService } from '../../Services/FabricateService';

@Component({
  selector: 'app-ship-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './ship-detail.html',
  styleUrl: './ship-detail.css',
})
export class ShipDetail {
  private route = inject(ActivatedRoute);
  private fabricateService = inject(FabricateService);

  message = signal<string>('');

  shipId = computed(() => Number(this.route.snapshot.paramMap.get('id')));

  ship = computed(() => {
    const id = this.shipId();
    return Ships.find(s => s.id === id) ?? null;
  });

  onFabricate() {
    const s = this.ship();

    if (!s) return;

    const ok = this.fabricateService.fabricate(s);

    this.message.set(ok ? 'Gemi başarıyla imal edildi.' : 'Bu gemi zaten imal edilmiş.');
  }
}
