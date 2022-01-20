import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'skill', component: SkillComponent },
  { path: '**', redirectTo: 'skill' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
