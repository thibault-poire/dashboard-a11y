import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  imports: [MatSidenavModule],
  selector: 'app-layout',
  standalone: true,
  styleUrl: 'layout.css',
  templateUrl: 'layout.html',
})
export class Layout {}
