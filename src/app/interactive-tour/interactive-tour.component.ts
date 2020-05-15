import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';
import { Place } from '../models/place';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-interactive-tour',
  templateUrl: './interactive-tour.component.html',
  styleUrls: ['./interactive-tour.component.scss']
})
export class InteractiveTourComponent implements OnInit {
  place: Place;
  srcUrl: any;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    // private location: Location,
    public sanitizer: DomSanitizer) {

  }

  sanitizedUrl(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  ngOnInit(): void {
    this.getPlace();
  }

  getPlace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placesService.getPlaces().subscribe(places => {
      const allFinds = this.placesService.getObjects(places, 'id', id);
      if (allFinds) {
        this.place = allFinds[0];
        this.srcUrl = this.sanitizedUrl(this.place.panoroma_link);
      }

    });
  }

}
