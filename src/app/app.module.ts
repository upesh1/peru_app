import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeHeaderComponent } from './home-header/home-header.component';

import { MaterialModule } from './material/material.module';
import { InteractiveTourComponent } from './interactive-tour/interactive-tour.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'


import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TourMapComponent } from './tour-map/tour-map.component';
import { MarkerPopupComponent } from './marker-popup/marker-popup.component';
import { LeafletMapService } from './leaflet.service';
import { GalleryComponent } from './gallery/gallery.component';
import { WalkThroughComponent } from './walk-through/walk-through.component';

import { PlacesService } from './services/places.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgxGalleryModule } from 'ngx-gallery-9';
import { VisualNarrativeComponent } from './visual-narrative/visual-narrative.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeButtonListComponent } from './home-button-list/home-button-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    InteractiveTourComponent,
    MainNavComponent,
    TourMapComponent,
    MarkerPopupComponent,
    GalleryComponent,
    WalkThroughComponent,
    VisualNarrativeComponent,
    FooterComponent,
    AboutComponent,
    QuizComponent,
    HomeButtonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LeafletModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [LeafletMapService, HttpClient, PlacesService],
  bootstrap: [AppComponent],
  entryComponents: [MarkerPopupComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(MarkerPopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
