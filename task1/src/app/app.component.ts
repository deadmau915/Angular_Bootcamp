import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = ' my application';
	author = 'Mauricio Marin Orozco';
	count = 0;
	imgSource = './../favicon.ico';
	enable = true;
}
