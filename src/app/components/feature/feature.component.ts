import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() padding: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
