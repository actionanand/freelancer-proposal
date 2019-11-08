import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs';

import { DocumentService } from '../service/document.service';
import { Document } from './document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Document Dashboard';
  documents: Document[];
  errorMsg: string;
  docSub: Subscription;
  timerSub: Subscription;

  constructor(private docServ: DocumentService) { }

  ngOnInit() {
    this.timerSub = timer(0, 5000).subscribe(
      ()=> this.onGetDoc()
    );
  }

  onGetDoc(){
    this.docSub = this.docServ.getDocuments().subscribe(
      documents => {
        this.documents = documents;
        // console.log('doc sub');
      },
      error =>{
        this.errorMsg = error;
        // console.log(this.errorMsg);
      }
    );
  }

  ngOnDestroy(){
    this.timerSub.unsubscribe();
    this.docSub.unsubscribe();
  }

}
