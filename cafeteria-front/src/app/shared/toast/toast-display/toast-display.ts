import { Component, inject } from '@angular/core';
import { Toast } from '../toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-display',
  imports: [CommonModule],
  templateUrl: './toast-display.html',
  styleUrl: './toast-display.css',
})
export class ToastDisplay {
   toast = inject(Toast);
}
