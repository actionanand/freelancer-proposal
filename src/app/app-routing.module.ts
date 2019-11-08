import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show/proposal-show.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'documents', component: DocumentComponent},
  {path: 'proposals', component: ProposalComponent},
  {path: 'proposals/new', component: ProposalNewComponent},
  {path: 'proposals/:id', component: ProposalShowComponent},
  {path: 'page-not-found', component: Page404Component},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
