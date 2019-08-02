import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() padding: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
