import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficBarComponent } from './grafic-bar/grafic-bar.component';

//Es para las rutas sin importar el routing module 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NavbarComponent, GraficBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule, 
  ],
  exports:[
    NavbarComponent,
    GraficBarComponent,
  ]
})
export class ComponentsModule { }
