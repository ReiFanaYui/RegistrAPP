import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import jsQR from 'jsqr';

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
  qrResult: string | null = null;

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });

    if (image && image.dataUrl) {
      this.imageSource = image.dataUrl;
      this.decodeQRCode(image.dataUrl);
    }
  }

  decodeQRCode(dataUrl: string) {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx?.getImageData(0, 0, img.width, img.height);

      // Modificación aquí: manejo de 'undefined' en imageData
      const code = jsQR(imageData?.data || new Uint8ClampedArray(), imageData?.width || 0, imageData?.height || 0);

      if (code) {
        this.qrResult = code.data;
        console.log('QR Code result:', this.qrResult);

        window.open(this.qrResult, '_blank');
      } else {
        this.qrResult = null;
        console.log('No QR Code detected.');
      }
    };

    img.src = dataUrl;
  }
}
