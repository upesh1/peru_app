import { Injectable, ElementRef, EventEmitter, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import { MarkerPopupComponent } from './marker-popup/marker-popup.component';

@Injectable()
export class LeafletMapService {

    public options: L.MapOptions;
    // for layers that will show up in the leaflet control
    public layersControl: any;
    // for layers not shown in the leaflet control
    public layers: any = [];

    constructor(injector: Injector) {
        this.options = {
            layers: [
                esri.basemapLayer('Streets')
            ],
            zoom: 5,
            center: L.latLng(39.8, -97.77)
        };

        this.layersControl = {
            baseLayers: {
                'Streets': esri.basemapLayer('Streets'),
                'Topographic': esri.basemapLayer('Topographic')
            },
            overlays: {
                'State Cities': this.addFeatureLayer(),
                'Big Circle': L.circle([46.95, -122], { radius: 5000 }),
                'Big Square': L.polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
            }
        };
    }

    public addFeatureLayer() {
        const features = esri.featureLayer({
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0',
            pointToLayer: function (geojson, latlng) {
                return new L.CircleMarker(latlng, {
                    color: 'green',
                    radius: 1
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(fl => {
                    const popupEl: NgElement & WithProperties<MarkerPopupComponent> = document.createElement('popup-element') as any;
                    // Listen to the close event
                    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
                    popupEl.message = `${feature.properties.areaname}, ${feature.properties.st}`;
                    // Add to the DOM
                    document.body.appendChild(popupEl);
                    return popupEl;
                });
            }
        });

        return features;
    }
}