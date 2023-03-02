import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  // {path: ':language?', component: HomeComponent},
  // {path: 'proyectos',   component: ArchiveComponent},
  { path: 'blogs', loadChildren: () => import('./components/blogs/blogs.module').then(m => m.BlogsModule) },

  { path: 'games/maze', loadChildren: () => import('./components/games/games.module').then(m => m.GamesModule) },
  { path: 'ai/object-detection', loadChildren: () => import('../app/components/objection-detection/object-detection.module').then(m => m.ObjectDetectionModule) },

  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
