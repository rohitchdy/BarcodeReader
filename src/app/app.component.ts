import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamOverlayComponent, BarcodeScannerLivestreamOverlayModule } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // title = 'BarcodeAndQRCodeScanner';
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;
  barcodeValue:any;
  ngAfterViewInit(){
    this.barcodeScanner.start();
  }
  onValueChanges(result:any){
    this.barcodeValue=result.codeResult.code;
  }
  onStarted(){
    console.log('started');
  }
}
