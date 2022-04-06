import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string = "";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    this.storage.get('status')
    .then((data)=>{this.myStatus=data})
    .catch();
  }

  saveStatus() {
    this.storage.set('status', this.myStatus)
    .then(()=>{this.navCtrl.navigateBack('/home')})
    .catch();
  }

}
