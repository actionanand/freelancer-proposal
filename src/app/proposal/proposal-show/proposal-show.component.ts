import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
  id: number;
  proposalSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.proposalSub = this.route.params.subscribe(params=>{
      this.id = params['id'];
    });
  }

}
