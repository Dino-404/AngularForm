import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public isOpen: boolean = false;

  toggleSidebar() {
    console.log("si");
    this.isOpen = !this.isOpen;
  }
}

