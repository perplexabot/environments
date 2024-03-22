import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ReactiveFormsModule, RouterOutlet]
})
export class AppComponent {
  title = 'app';
  oh_no = 'syck!';
  attempt: string | null = '';

  f = new FormControl('');

  dothing() {
      this.attempt = this.f.value
  }
}
