import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { User } from '../user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  user = new User();

  userForm: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  private title: Title = inject(Title);
  constructor() {
    this.userForm = this.fb.group({ 
      username: this.fb.control('',[Validators.required, Validators.minLength(4)]), 
      password: this.fb.control('',[Validators.required]) 
    });
    this.title.setTitle('Form');
  }

  /*   register(valeur: any) {
      console.log(valeur);
    } */

  /*   register(){
   console.log(this.user);
   } */

  register():boolean {
    if(this.userForm.invalid){
      return false;
    }
    // faire un traitement
    console.log(this.userForm.value);
    return true;
  }

}
