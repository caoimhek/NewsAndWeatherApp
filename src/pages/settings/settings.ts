import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-settings',
 	templateUrl: 'settings.html',
 })
 export class SettingsPage {

 	units: string; 
 	text: string; 
 	city: string;

 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams, private storage: Storage) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SettingsPage');
 		console.log(this.city );

 	}

 	ionViewWillEnter(){
 		this.storage.get("city" )
 		.then((data) => {
 			this.city  = data;
 		})
 		.catch((error) => alert("Problem accessing local storage"));

 		this.storage.get("units" )
 		.then((data) => {
 			this.units  = data;
 		})
 		.catch((error) => alert("Problem accessing local storage"));


 	}


 	save(){
 		this.storage.set("city", this.city);
 		this.storage.set("units", this.units);
 		

 		console.log(this.city);
 		switch (this.units){
 			case "standard":
 			this.text = "Standard Units";

 			break;
 			case "metric":
 			this.text = "Metric Units";
 			break;
 			default:
 			this.text = "Imperial Units";
 			break;

 			
 		}

 	}}
