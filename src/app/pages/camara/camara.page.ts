import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})



export class CamaraPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

  imageSource: any;

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });

    this.imageSource=image.dataUrl;

  }
}
