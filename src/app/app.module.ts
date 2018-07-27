import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { appRouting } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TemplatetableComponent } from './components/templatetable/templatetable.component'
import {TemplateService} from './services/template.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewtemplateComponent } from './components/newtemplate/newtemplate.component';
import { DeleteConfirmDialogComponent } from './shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import {TemplateMetadataProvider} from './providers/template-metadata-provider';
import { PopupDialogComponent } from './shared/popup-dialog/popup-dialog.component';
import {MaterialModule} from './shared/material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TemplatetableComponent,
    NewtemplateComponent,
    DeleteConfirmDialogComponent,
    TemplateDetailsComponent,
    PopupDialogComponent
  ],
  entryComponents: [DeleteConfirmDialogComponent, PopupDialogComponent],
  providers: [TemplateService, TemplateMetadataProvider],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
