import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricateService } from '../../Services/FabricateService';
import { AuthService } from '../../Services/AuthService';
import { RouterModule, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fabricate-completion',
  imports: [CommonModule, RouterLink],
  templateUrl: './fabricate-completion.html',
  styleUrl: './fabricate-completion.css',
})
export class FabricateCompletion {
  fabricateService = inject(FabricateService);
  private authService = inject(AuthService);
  private router = inject(Router);

  logout() : void {
    this.authService.logout();
    this.router.navigate(['/ships']);
  }
}
