import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { yesnoObject } from './yesnoApiAnswer.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = 'task 3';
	url = 'https://yesno.wtf/api';
	posts$: Observable<yesnoObject>;
	yesnoImage = '';

	constructor(private http: HttpClient) {
		this.posts$ = this.http.get<yesnoObject>(this.url);
		this.posts$.subscribe((data) => (this.yesnoImage = data.image));
	}
}
