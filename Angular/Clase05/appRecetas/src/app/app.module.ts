import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { RecetaService } from './receta.service';
import { LogService } from './log.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route } from '@angular/router'
import { AuthGuard } from './auth.guard';

const rutas: Route[] = [
  //{ path: "", canActivate: [AuthGuard], component: LoginComponent },
  { path: "", component: LoginComponent },
  {
    //path: "recetas", canActivate: [AuthGuard], children: [
    path: "recetas", children: [
      { path: "", component: ListadoComponent },
      { path: "nuevo", canActivate: [AuthGuard], component: FormularioComponent }
    ]
  }
	/* 	{ path: "recetas", component: ListadoComponent },
		{ path: "recetas/nuevo", component: FormularioComponent } */
	/* 	{
			path: "recetas", component: ListadoComponent, children: [
				{ path: "", component: ListadoComponent },
				{ path: "nuevo", component: FormularioComponent }
			]
		} */
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
