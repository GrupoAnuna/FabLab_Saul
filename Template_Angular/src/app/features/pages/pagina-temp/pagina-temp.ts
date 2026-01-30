import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Scroll } from 'app/services/scroll';

@Component({
  selector: 'app-pagina-temp',
  imports: [RouterLink],
  templateUrl: './pagina-temp.html',
  styleUrl: './pagina-temp.css',
})
export class PaginaTemp {
  constructor(private scrollService: Scroll) { }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
