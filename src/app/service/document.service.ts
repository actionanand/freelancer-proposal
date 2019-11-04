import { Injectable } from '@angular/core';

import { Document } from '../document/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  public documents: Document[]=[
    {
      title: 'First Document',
      description: 'This is best amonst what I searched',
      file_url: 'https://www.google.com',
      updated_at: '2018/11/13',
      image_url: 'google'
      },
      {
        title: 'Second Document',
        description: 'This is nice amonst what I searched',
        file_url: 'https://www.google.com',
        updated_at: '2019/10/17',
        image_url: 'google'
      }
  ];

  constructor() { }
}
