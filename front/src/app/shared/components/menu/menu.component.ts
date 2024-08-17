import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import type { Option } from './menu.type';

@Component({
  imports: [IconComponent],
  selector: 'app-shared-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  @Input({ required: true }) options: Option[] | null = null;

  @ViewChild('button') button: ElementRef | null = null;
  @ViewChild('menu') menu: ElementRef | null = null;

  id: string = `menu-${crypto.randomUUID()}`;
  is_expanded = false;

  @HostListener('window:click', ['$event'])
  close_menu(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (
      this.button?.nativeElement.contains(target) ||
      this.menu?.nativeElement.contains(target)
    ) {
      return;
    }

    this.is_expanded = false;
  }

  handle_click() {
    this.is_expanded = !this.is_expanded;
  }
}
