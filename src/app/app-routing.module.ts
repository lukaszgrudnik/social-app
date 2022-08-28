import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileModule} from "./profile/profile.module";
import {TemplateGuard} from "../guards/template.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'profile/:userId',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '',
    loadChildren: () => import('./social/social.module').then(m => m.SocialModule),
    canActivate: [TemplateGuard]
  }
];

@NgModule({
  providers: [TemplateGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
