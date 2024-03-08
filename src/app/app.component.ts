import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FirstBlockComponent } from './first-block/first-block.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstBlockComponent,
    MenuComponent,
    AboutComponent,
    RouterModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angcrash';
}
