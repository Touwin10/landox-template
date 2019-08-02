import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {
  @Input() home: any;
  @Input() features: any;
  @Input() works: any;
  @Input() services: any;
  @Input() testimonials: any;
  @Input() pricings: any;
  @Input() contact: any;

  toggleBarMenu: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public onToggleBarMenu() {
    this.toggleBarMenu = !this.toggleBarMenu;
  }

}
