import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@features/shell/components/header/header.component';
import { FooterComponent } from '@features/shell/components/footer/footer.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  // Usamos template inline para asegurarnos de que NO carga basura
  template: `
  <app-header></app-header>
    <router-outlet />
  <app-footer></app-footer>
  `,
  styleUrl: './app.component.css' // estilos globales
})
export class AppComponent { 

  constructor(private viewportScroller: ViewportScroller) { }
    // Scroll suave a la sección
  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}