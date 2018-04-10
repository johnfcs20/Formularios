import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
         .ng-invalid.ng-touched:not(form){
          border: 1px solid red;
          color:red;
        }
  `]
})
export class TemplateComponent  {

  usuario: Object ={

      nombre: null,
      apellido: null,
      correo: null,
      pais: "CRI",
      sexo: null,
      acepta: false
  }

  hola:string = 'Hola Mundo';


  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }]

  sexos: string[] = ['hombre', 'mujer'];

  constructor() {
    console.log (this.usuario);
   }


   onSubmit(forma : NgForm){
     console.log("Formulario posteado")
    console.log("ngForm",forma);
    console.log("valor", forma.value);

    console.log("Usuario", this.usuario);

  }

}
