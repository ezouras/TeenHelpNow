import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopicSidePaneComponent } from './topic-side-pane/topic-side-pane.component';
import { TeamInfoSectionComponent } from './team-info-section/team-info-section.component';
import { HomeBottomOverviewComponent } from './home-bottom-overview/home-bottom-overview.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    TopicSidePaneComponent,
    TeamInfoSectionComponent,
    HomeBottomOverviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
