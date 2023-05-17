import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'List', icon: 'label', url: './list'},
    {label: 'Search', icon: 'add', url: './search'},
    {label: 'Add hero', icon: 'search', url: './new-hero'},
  ]

}
