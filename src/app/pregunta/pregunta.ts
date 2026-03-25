import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta',
  imports: [CommonModule],
  templateUrl: './pregunta.html',
  styleUrl: './pregunta.scss',
})
export class Pregunta {
  private router = inject(Router);
  
  noButtonPosition = { top: 'auto', left: 'auto' };
  isFirstMove = true;
  
  onYesClick() {
    this.router.navigate(['/celebracion']);
  }
  
  onNoClick(event: Event) {
    event.preventDefault();
    const button = event.currentTarget as HTMLElement;
    const buttonsContainer = button.parentElement;
    const contentWrapper = buttonsContainer?.parentElement?.parentElement;
    if (!contentWrapper) return;
    
    // Calculate available space in the content wrapper
    const containerRect = contentWrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Use the full container dimensions, accounting for the button
    const maxX = containerRect.width - button.offsetWidth - 50;
    const maxY = containerRect.height - button.offsetHeight - 50;
  
    // Calculate random position (minimum 50px from top-left to avoid overlap)
  const newX = 50 + Math.random() * Math.max(0, maxX);
  const newY = 50 + Math.random() * Math.max(0, maxY);
  
    this.noButtonPosition = {
      top: `${newY}px`,
      left: `${newX}px`
    };
    
    this.isFirstMove = false;
  }
}
