import { Routes } from '@angular/router';
import { FirstBlockComponent } from './first-block/first-block.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'home',
        component:FirstBlockComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'about/:username',
        component:AboutComponent
    }
];
