import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DocumentViewerApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {File } from '@ionic-native/file';
import {FileTransfer} from '@ionic-native/file-transfer';
import {DocumentViewer} from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    DocumentViewerApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DocumentViewerApp),PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DocumentViewerApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},File,FileTransfer,DocumentViewer
  ]
})
export class AppModule {}
