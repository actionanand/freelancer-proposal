import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { flatMap, take } from 'rxjs/operators';
import { ProposalService } from 'src/app/service/proposal.service';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit, OnDestroy {
  id: number;
  proposalSub: Subscription;
  proposal:Proposal;

  constructor(private route: ActivatedRoute, private proposalSrv: ProposalService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.proposalSub = this.proposalSrv.getProposal(params['id']).subscribe(proposal=>{
        this.proposal = proposal;
        // console.log(proposal);
      });
    })
  }

  ngOnDestroy(){
    this.proposalSub.unsubscribe();
  }

}
