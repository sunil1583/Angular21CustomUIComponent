import { Component, Input } from '@angular/core';

@Component({
  selector: 'aw-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title = '';
}
