import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'documents', component: DocumentComponent},
  {path: 'proposals', component: ProposalComponent},
  {path: 'proposals/new', component: ProposalNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
