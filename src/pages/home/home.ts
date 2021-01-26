import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../providers/weather/weather';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-home',
 	templateUrl: 'home.html',
 })
 export class HomePage {

 	city : string;
 	units : string;
 	feels_like : string;
 	temp: string;
 	myMain: string;
 	icon : string;
 	description : string;
 	country: string;
 	hideArticles : boolean;
 	weatherHidden : boolean;
 	hideIcon : boolean;
 	hideCityNotFound : boolean;
 	articles : string;
 	totalResults : string;


 	constructor(public navCtrl: NavController,
 		public navParams: NavParams, private storage: Storage, private wp: WeatherProvider, private np: NewsProvider) {
 	}


 	openSettingsPage(){
 		this.navCtrl.push(SettingsPage);

 	}

 	ionViewWillEnter(){
 		this.city = "City not found ";
 		this.buttonDisabled = true;
 		this.storage.get("city" )
 		.then((data) => {
 			if (data && data.length > 0)  {
 				this.city  = data;
 				this.buttonDisabled = false;
 				this.updateWeather();
 			}

 		})
 		.catch((error) => alert(error));

 		this.units = "0";
 		this.storage.get("units")
 		.then((data) => {
 			if (data && data.length > 0){
 				this.units = data;
 				this.updateWeather();
 			}
 		})
 		.catch((error) => alert("Problem accessing local storage"));




 	}
 	updateWeather(){
 		this.wp.getWeather(this.city, this.units).subscribe(data => {
 			console.log (data);	
 			this.feels_like = data.main.feels_like;
 			this.temp = data.main.temp;
 			this.myMain = data.weather[0].main;
 			this.icon = data.weather[0].icon;
 			this.description = data.weather[0].description;
 			console.log (data.main.feels_like);
 			this.country = data.sys.country;
 			this.hideArticles = true;
 			this.weatherHidden = false;
 			this.hideIcon = false;
 			this.hideCityNotFound = true; 

// if statement compare old value with new and if
//dont match then clean it by setting to null 72
}, error => {console.log("MY ERROR" +error);
this.hideArticles = true;
this.buttonDisabled = true;
this.icon = "";
this.description = "";
this.myMain = "";
this.temp = "";
this.feels_like = "";
this.hideIcon = true;
this.hideCityNotFound= false;
})

 	}

 	buttonDisabled : boolean;

 	openArticle(url : string){
 		console.log(url);
 		window.open(url);
//window.open(title);
//window.open(description);


}


openNews(){
	this.np.getNews(this.country, ).subscribe(data => {
		console.log (data);
		this.articles = data.articles;
		this.hideArticles = false;

		this.totalResults = data.totalResults;
	//this.title = data.articles[0].title;
	//this.description = data.articles[0].description;
	//this.url = data.articles[0].url;
	//this.urlToImage = data.articles[0].urlToImage;
	//console.log(this.title);
	//console.log(this.country);

})



}




}
