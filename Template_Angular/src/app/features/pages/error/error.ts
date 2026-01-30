import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Scroll } from '../../../services/scroll';


@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {
  constructor(private scrollService: Scroll) { }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
