import { Component, Input } from '@angular/core';
@Component({
  selector: 'aw-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() columns: string[] = [];

  @Input() data: any[] = [];
}
