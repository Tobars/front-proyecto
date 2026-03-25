import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celebracion',
  imports: [CommonModule],
  templateUrl: './celebracion.html',
  styleUrl: './celebracion.scss',
})
export class Celebracion {
  private router = inject(Router);
  
  onGoBack() {
    this.router.navigate(['/']);
  }
}
