import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'testing';
  searched = false;
  query = "default search"

  input0form: FormGroup
  //constructor(private formBuilder: FormBuilder) {
  //    this.input_0_form = this.formBuilder.group({
  //        password: [''],
  //        email: [''],
  //        birthday: ['']
  //    });
  //}



  clicked(): void {
      console.log("clicked")
  }
}
