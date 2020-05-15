import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../models/place';
import { Observable } from 'rxjs';

@Injectable()
export class PlacesService {

    constructor(private httpService: HttpClient) { }

    getPlaces(): Observable<Place[]> {
        return this.httpService.get<Place[]>('https://siuctexr.github.io/mg/assets/jsons/places.json');
    }

    getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) {
                continue;
            }
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getObjects(obj[i], key, val));
            } else
                // if key matches and value matches or if key matches and value is not passed 
                // (eliminating the case where key matches but passed value does not)
                if (i == key && obj[i] == val || i == key && val == '') { //
                    objects.push(obj);
                } else if (obj[i] == val && key == '') {
                    // only add if the object is not already in the array
                    if (objects.lastIndexOf(obj) == -1) {
                        objects.push(obj);
                    }
                }
        }
        return objects;
    }







}
