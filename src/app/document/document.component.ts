import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents = this.docServ.documents;

  constructor(private docServ: DocumentService) { }

  ngOnInit() {

  }

}
