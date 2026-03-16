import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, Card, Table } from 'aw-ui-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Table, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('artwork-app');
  users = [
    { name: 'John', age: 25, sex: 'male' },
    { name: 'Anna', age: 30, sex: 'female' },
  ];
}
