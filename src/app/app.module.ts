import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardExampleComponent } from './card-example/card-example.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';

const rutas:Routes = [
  {path: 'tarjeta', component:CardExampleComponent},
  {path: 'calculadora', component:CalculatorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CardExampleComponent,
    CalculatorComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forChild(rutas),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
