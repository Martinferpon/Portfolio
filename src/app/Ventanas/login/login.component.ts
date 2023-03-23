import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor( private builder: FormBuilder, private autenticacionService: AutenticacionService, private ruta:Router) { 
    this.form=this.builder.group ({ 
      password:['',[Validators.required,Validators.minLength(8)]],
      email:['',[Validators.required,Validators.email]],
      deviceInfo: this.builder.group({
        deviceId:["17867868768"],
        deviceTyoe:["DEVICE_TYPE_ANDROID"],
        notificationToken: ["67657575eececc34"],
      })
    })
  }

  ngOnInit(): void {
  }
   get Password (){
    return this.form.get("password");
   }
   get Mail (){
    return this.form.get("email");
   }
   get PasswordValid (){
    return this.Password?.touched && !this.Password?.valid;
   }
   get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
   }
  onEnviar (event: Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log ("DATA:" + JSON.stringify(data));  
      this.ruta.navigate(['dashboard']);
    })
    //if (this.form.valid){
    //alert (" Todo Salió bien- Enviar Formulario")
  //}
    // else {
      //this.form.markAllAsTouched ();
    // }
}
  }
