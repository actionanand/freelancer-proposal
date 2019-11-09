import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs';

import { Proposal } from './proposal';
import { ProposalService } from '../service/proposal.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit, OnDestroy {

  proposals :Proposal[];
  errorMsg: string = null;
  proposalSub: Subscription;
  // timerSub: Subscription;
  loading: boolean = false;

  constructor(private proposalServ: ProposalService) { }

  ngOnInit() {
    // this.timerSub = timer(0, 5000).subscribe(
    //   ()=> this.onGetProposals()
    // );
    this.onGetProposals();
  }

  onGetProposals(){
    this.loading = true;
    this.proposalSub = this.proposalServ.getProposals().subscribe(
      proposals => {
        this.proposals = proposals;
        this.loading = false;
        // console.log('doc sub');
      },
      error =>{
        this.errorMsg = error;
        this.loading = false;
        // console.log(this.errorMsg);
      }
    );
  }

  onClose(){
    this.errorMsg = null;
    this.loading = false;
  }

  ngOnDestroy(){
    this.proposalSub.unsubscribe();
    // this.timerSub.unsubscribe();
  }
}