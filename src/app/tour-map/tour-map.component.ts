import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as esri from 'esri-leaflet';
import * as L from 'leaflet';

import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';
import { LeafletMapService } from '../leaflet.service';
import { NgElement, WithProperties } from '@angular/elements';
import { MarkerPopupComponent } from '../marker-popup/marker-popup.component';

import { Location } from '@angular/common';
import { PlacesService } from '../services/places.service';
import { Place } from '../models/place';
@Component({
  selector: 'app-tour-map',
  templateUrl: './tour-map.component.html',
  styleUrls: ['./tour-map.component.scss']
})
export class TourMapComponent implements OnInit {

  map: L.Map;
  initialZoom = 15;
  places: Place[];

  options = {
    layers: [
      L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 18,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      })
      // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: this.initialZoom,
    center: L.latLng(37.49845600, -88.63340000)
  };



  markers: Layer[] = [];
  constructor(public _leafletSvc: LeafletMapService, private location: Location, private placesService: PlacesService) { }

  ngOnInit(): void {


    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    });


  }

  resetMap() {

    this.map.flyTo(L.latLng(37.49845600, -88.63340000), this.initialZoom, {
      animate: true,
      duration: 1 // in seconds
    });
    // this.map.panTo(L.latLng(37.49845600, -88.63340000)).setZoom(this.initialZoom);
    // this.map.setZoom(this.initialZoom);
  }

  goBack() {
    this.location.back();
  }

  public onMapReady(map: L.Map) {

    this.map = map;
    const markers = [];

    this.places.forEach(el => {
      markers.push(this.initializeMarker(el.latitude, el.longitude, el.icon, el.name, el.id));
    });

    markers.forEach(m => {
      m.marker.bindPopup(fl => this.createPopupComponentWithMessage(m.placeName, m.id));
      m.marker.addTo(map);
    });

  }



  public createPopupComponentWithMessage(message: any, id = 0, shortDesc = '') {

    const popupEl: NgElement & WithProperties<MarkerPopupComponent> = document.createElement('popup-element') as any;
    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    popupEl.message = message;
    popupEl.placeId = id;
    popupEl.shortDesc = shortDesc;
    // Add to the DOM
    document.body.appendChild(popupEl);
    return popupEl;
  }

  public initializeMarker(lat: number, long: number, iconImage: string, name: string, id: number) {

    const markera = marker(
      [lat, long],
      {
        icon: icon({
          iconSize: [35, 51],
          iconAnchor: [13, 41],
          iconUrl: `assets/icons/${iconImage}`,
          shadowUrl: 'assets/marker-shadow.png'
        })
      }
    );

    return { marker: markera, placeName: name, id };
  }
}
