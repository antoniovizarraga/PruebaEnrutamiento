import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [
    ReactiveFormsModule, NgIf
  ],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {

  formulario: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        nombre: new FormControl('',[Validators.required]),
        apellidos: new FormControl("",[])
      }
    );
  }

  saluda() {
    alert("Hola " + this.formulario.controls['nombre'].value + " " + this.formulario.controls['apellidos'].value);
  }

}
