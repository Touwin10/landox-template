import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() padding: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
