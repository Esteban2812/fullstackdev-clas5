import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  onCambioEstado = new EventEmitter<boolean>()


  constructor(private router: Router) { }

  login() {
    this.router.navigate(["recetas"])
    sessionStorage.setItem("usuario", "shidalgo")
    this.onCambioEstado.emit(true)

  }

  logout() {
    sessionStorage.clear()
    //this.router.navigate(["/"])
    this.router.navigate([""]) //work similar as above
    this.onCambioEstado.emit(false)
  }

  estaLogueado() {
    return sessionStorage.getItem("usuario") ? true : false
  }
}
