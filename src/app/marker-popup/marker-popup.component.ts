import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styleUrls: ['./marker-popup.component.scss']
})
export class MarkerPopupComponent implements OnInit {

  @Input() message = 'Default Pop-up Message.';
  @Input() placeId: number;
  @Input() shortDesc = 'Default Description.';


  constructor() { }

  ngOnInit() {
  }

}
