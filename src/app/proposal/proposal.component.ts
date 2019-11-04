import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  proposalOne: Proposal = new Proposal(15, 'abc & co', 'www.abc.com', 'RoR', 130, 100, 15, 'abc@abc.com');
  proposalTwo: Proposal = new Proposal(19, 'xyz & co', 'www.xyz.xyz', 'Django', 150, 100, 17, 'xyz@xyz.xyz');
  proposalThree: Proposal = new Proposal(23, 'qwe & co', 'www.qwe.in', 'Angular', 140, 100, 16, 'qwe@qwe.in');

  proposals :Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree];
  constructor() { }

  ngOnInit() {
  }

}