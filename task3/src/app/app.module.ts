import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesnoApiConsumerComponent } from './yesnoApiConsumer/yesnoApiConsumer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent, YesnoApiConsumerComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
