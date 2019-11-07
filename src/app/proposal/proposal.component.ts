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
  errorMsg: string;
  proposalSub: Subscription;
  timerSub: Subscription;

  constructor(private proposalServ: ProposalService) { }

  ngOnInit() {
    this.timerSub = timer(0, 5000).subscribe(
      ()=> this.onGetProposals()
    );
  }

  onGetProposals(){
    this.proposalSub = this.proposalServ.getProposals().subscribe(
      proposals => {
        this.proposals = proposals;
        // console.log('doc sub');
      },
      error =>{
        this.errorMsg = error;
        // console.log(this.errorMsg);
      }
    );
  }

  ngOnDestroy(){
    this.proposalSub.unsubscribe();
    this.timerSub.unsubscribe();
  }
}