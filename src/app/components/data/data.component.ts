import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
    nombre: "fernndo",
    apellido: "herrera"
    },
    correo: "jh20@hotmail.co,"
    //pasatiempos:['comer', 'dormir']
  }

  constructor() {

    console.log(this.usuario);


    this.forma= new FormGroup({

      'nombrecompleto':new FormGroup({

      'nombre': new FormControl(this.usuario.nombrecompleto.nombre, [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl(this.usuario.nombrecompleto.apellido, [Validators.required, this.noHerera]),
      }),

      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),

      'pasatiempos': new FormArray([
          new FormControl('Correr', Validators.required)
      ])
    });

    //this.forma.setValue(this.usuario);

   }



   guardarCambios(){
     console.log(this.forma.value);
    // this.forma.reset(this.usuario);
    //this.forma.controls['correo'].setValue('nuevocorreo@sasasasa.com')
   }

   noHerera(control : FormControl):  {[s:string]:boolean}{

    if(control.value == "herrera"){
      return {noherrera: true}
    }

   }

   agregarPasatiempos(){
     console.log(this.forma.controls['pasatiempos'].value);

     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('Dormir',Validators.required)
     )
   }

}
