import { Component, OnInit, OnDestroy } from '@angular/core';
import { Proposal } from '../proposal';
import { NgForm } from '@angular/forms';
import { ProposalService } from 'src/app/service/proposal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit, OnDestroy {

  proposal = new Proposal;
  submitted: boolean = false;
  createProposalSub: Subscription;
  message: string;
  alertClosed: boolean = true;
  type: string;
  isMailSent: boolean = false;
  email:string = null;

  constructor(private proposalServ: ProposalService) { }

  onCreateProposal(form: NgForm){
    this.email = form.value.client_email;
    this.createProposalSub = this.proposalServ.createProposal(form.value).subscribe(
      data=>{
        this.message = 'Proposal submitted successfuly';
        this.type = 'success';
        this.isMailSent = !!this.email;
      },
      error=>{
        this.message = 'Proposal not submitted, try after sometime';
        this.type = 'danger';
      });
    this.submitted = true;
    this.alertClosed = false;
    form.reset();
  }

  ngOnInit() {
    
  }

  onClose(){
    this.alertClosed = true;
    this.submitted = false;
    this.isMailSent = false;
  }

  ngOnDestroy(){
    if(!!this.createProposalSub){    
      this.createProposalSub.unsubscribe();
    }
  }

}
