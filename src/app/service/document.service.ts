import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Document } from '../document/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentUrl = 'http://127.0.0.1:3000/freelance_documents.json';

  // public documents: Document[]=[
  //   {
  //     title: 'First Document',
  //     description: 'This is best amonst what I searched',
  //     file_url: 'https://www.google.com',
  //     updated_at: '2018/11/13',
  //     image_url: 'https://cdn.pixabay.com/photo/2015/01/26/10/23/office-612532_960_720.jpg'
  //     },
  //     {
  //       title: 'Second Document',
  //       description: 'This is nice amonst what I searched',
  //       file_url: 'https://www.google.com',
  //       updated_at: '2019/10/17',
  //       image_url: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg'
  //     }
  // ];

  constructor(private http: HttpClient) { }

  getDocuments() {
    return this.http.get<Document[]>(this.documentUrl).pipe(
      catchError(this.handleError)
    );
  }


  private handleError (errorResp: HttpErrorResponse) {
    return throwError(errorResp.statusText);
  }
}
