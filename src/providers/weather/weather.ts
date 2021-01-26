import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class WeatherProvider {

  	constructor(public http: HttpClient) {
  		console.log('Hello WeatherProvider Provider');
  	}

  	getWeather(city : string, units : string ): Observable<any>{
//return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Galway&units=metric&appid=d2b129c01c2d1dc674a573e998fce8a4`);
return this.http.get(`http:\/\/api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=d2b129c01c2d1dc674a573e998fce8a4`);

}


}
