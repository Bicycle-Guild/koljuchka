import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiScrollbarModule } from '@taiga-ui/core';
import {TuiFadeModule} from '@taiga-ui/experimental';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TuiScrollbarModule, TuiFadeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
