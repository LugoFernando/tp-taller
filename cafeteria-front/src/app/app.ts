import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './public/menu/menu.component';
import { FooterComponent } from './public/footer/footer.component';
import { ToastDisplay } from './shared/toast/toast-display/toast-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent, ToastDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
