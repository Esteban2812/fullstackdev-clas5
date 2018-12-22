import { CanActivate } from "@angular/router";
import { SeguridadService } from "./seguridad.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(private seguridadService: SeguridadService) {

  }

  canActivate(): boolean {
    return this.seguridadService.estaLogueado()
  }

}
