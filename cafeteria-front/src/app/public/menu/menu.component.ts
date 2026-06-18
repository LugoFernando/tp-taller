import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CryptService } from '../../api/services/auth/crypt.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterOutlet, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  usuarioEmail = '';

  constructor(private cryptService: CryptService, private router: Router) { }

  ngOnInit() {
    const token = this.cryptService.obtenerToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.usuarioEmail = payload.email;
    }
  }

  logout() {
    this.cryptService.eliminarToken();
    this.router.navigate(['/auth/login']);
  }
}
