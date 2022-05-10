import { NgModule } from '@angular/core'
import { AppRoutingModule } from './modules/app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data.service'

import { AppComponent } from './app.component'
import { ButtonBaseComponent } from './components/controls/button-base/button-base.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { HeroLinkComponent } from './components/controls/hero-link/hero-link.component'
import { MessagesComponent } from './components/messages/messages.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroLinkComponent,
    ButtonBaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
