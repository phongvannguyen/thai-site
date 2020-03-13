import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SaladComponent } from './salad/salad.component';
import { TestComponent } from './test/test.component';
import { AppetizerComponent } from './appetizer/appetizer.component';
import { SoupComponent } from './soup/soup.component';
import { DessertsDrinksComponent } from './desserts-drinks/desserts-drinks.component';
import { LunchEntreesComponent } from './lunch-entrees/lunch-entrees.component';
import { LunchCurriesComponent } from './lunch-curries/lunch-curries.component';
import { LunchRiceNoodlesComponent } from './lunch-rice-noodles/lunch-rice-noodles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SaladComponent,
    TestComponent,
    AppetizerComponent,
    SoupComponent,
    DessertsDrinksComponent,
    LunchEntreesComponent,
    LunchCurriesComponent,
    LunchRiceNoodlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
