import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {File } from '@ionic-native/file';
import {FileTransfer} from '@ionic-native/file-transfer';
import {DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pdfSrc: string = '/pdf-test.pdf';
  constructor(public navCtrl: NavController,private file:File,private ft:FileTransfer,private doc:DocumentViewer,private platform:Platform) {
this.pdfSrc="assets/example.pdf";
  }
  openLocalPdf()
  {
    const options:DocumentViewerOptions={
      title:'my PDF'
    }
    this.doc.viewDocument('assets/example.pdf','application/pdf',options)
  }
  downloadAndOpenPDF()
  {
      let path=null;
      if(this.platform.is('ios'))
      {
        path=this.file.documentsDirectory;
      }
      else{
        path=this.file.dataDirectory;
      }
      const transfer=this.ft.create();
      transfer.download('https://devapi.usegomo.com/Images/CommFiles/Ticket_20190802042400.pdf',path+'myfile.pdf').then(entry=>{
        let url=entry.toURL();
       this.doc.viewDocument(url,'application/pdf',{});
    })
  }

}


//////////////////////////////Packages Used/////////////////////////////
/**********
 * 
 * 
 * 
 * 
 *  ionic cordova plugin add cordova-plugin-file-transfer
 *  npm install @ionic-native/file-transfer@4.0
 * 
 *  ionic cordova plugin add cordova-plugin-file
 *  npm install @ionic-native/file@4.0
 * 
 *  ionic cordova plugin add cordova-plugin-document-viewer
 *  npm install @ionic-native/document-viewer@4.0
 * 
 * npm install ng2-pdf-viewer@3.0.8 --save
 * 
 * https://www.youtube.com/watch?v=kM4cCQn8Bz4
 * 
 * 
 * https://www.npmjs.com/package/ng2-pdf-viewer
 * 
 * ************** */