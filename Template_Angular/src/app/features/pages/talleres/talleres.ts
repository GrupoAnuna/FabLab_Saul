import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Scroll } from '../../../services/scroll';


@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.html',
  styleUrl: './talleres.css',
})
export class Talleres {
  constructor(private scrollService: Scroll) { }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
