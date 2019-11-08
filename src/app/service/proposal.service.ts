import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Proposal } from '../proposal/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  // private proposalUrl: string = 'https://freelance-apiapp.herokuapp.com/proposals';
  private proposalUrl: string = 'http://localhost:3000/proposals';

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

  createProposal(proposal: Proposal){
    return this.http.post(this.proposalUrl +'.json', JSON.stringify(proposal),
    {
      headers: new HttpHeaders({'content-type': 'Application/json'})
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError (errorResp: HttpErrorResponse) {
    if(!!errorResp.statusText){
      return throwError(errorResp.statusText);
    }else
    {
      return throwError('Please contact app owner');
    }
  }

}
