import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.scss']
})
export class PricingsComponent implements OnInit {
  @Input() padding: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
