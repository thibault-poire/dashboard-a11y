import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/layout/layout';

@Component({
  imports: [Layout],
  selector: 'app-homepage',
  standalone: true,
  templateUrl: 'homepage.html',
})
export class Homepage {}
