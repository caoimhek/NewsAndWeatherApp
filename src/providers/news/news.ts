import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class NewsProvider {

  	constructor(public http: HttpClient) {
  		console.log('Hello NewsProvider Provider');
  	}

  	getNews(country : string) : Observable<any>{



  		return this.http.get(`http:\/\/newsapi.org/v2/top-headlines?country=${country}&pageSize=5&apiKey=e065bf599ce44f9fba3dcc13207d2e5f`);


  	}

  }
