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
  errorMsg: string = null;
  docSub: Subscription;
  timerSub: Subscription;
  loading: boolean = false;

  constructor(private docServ: DocumentService) { }

  ngOnInit() {
    this.timerSub = timer(0, 2000000).subscribe(
      ()=> this.onGetDoc()
    );
  }

  onGetDoc(){
    this.loading = true;
    this.docSub = this.docServ.getDocuments().subscribe(
      documents => {
        this.documents = documents;
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
    this.timerSub.unsubscribe();
    this.docSub.unsubscribe();
  }

}
