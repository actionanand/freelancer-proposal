import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Proposal } from '../proposal/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private proposalUrl: string = 'http://127.0.0.1:3000/proposals';

  constructor(private http: HttpClient) { }

  getProposals() {
    return this.http.get<Proposal[]>(this.proposalUrl + '.json').pipe(
      catchError(this.handleError)
    );
  }

  getProposal(index: number){
    return this.http.get<Proposal>(this.proposalUrl + '/' +index +'.json').pipe(
      catchError(this.handleError)
    );
  }

  private handleError (errorResp: HttpErrorResponse) {
    return throwError(errorResp.statusText);
  }

}
