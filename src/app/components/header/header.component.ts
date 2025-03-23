import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
  <mat-toolbar color="primary">
   <button mat-icon-button routerLink="/">
    <mat-icon>home</mat-icon>
  </button>
  <span>My Product Management</span>
  
</mat-toolbar>
  `,
  
})
export class HeaderComponent {

}
