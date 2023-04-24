import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private sidebarComponent: SidebarComponent) {}

  public toggleSidebar(): void {
    this.sidebarComponent.toggleSidebar();
  }
}
