import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaiComponent } from './cai/cai.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
    { path: 'skill', component: SkillComponent },
    { path: 'cai', component: CaiComponent },
    { path: 'cai/:semester', component: CaiComponent },
    { path: '**', redirectTo: 'skill' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
