import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-walk-through',
  templateUrl: './walk-through.component.html',
  styleUrls: ['./walk-through.component.scss']
})
export class WalkThroughComponent implements OnInit, AfterViewInit {
  unityInstance: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.unityInstance = UnityLoader.instantiate('unityContainer', 'assets/unity/Build/webgl.json');
  }
}
