import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { AcaoComponent } from './components/acao/acao.component';
import { AventuraComponent } from './components/aventura/aventura.component';
import { EsporteComponent } from './components/esporte/esporte.component';
import { FantasiaComponent } from './components/fantasia/fantasia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: StartComponent },
  { path: 'acao', component: AcaoComponent },
  { path: 'aventura', component: AventuraComponent },
  { path: 'esporte', component: EsporteComponent },
  { path: 'fantasia', component: FantasiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
