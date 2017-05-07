import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

	maxSize: number = 5;
	currentPage: number = 1;
	itemsPerPage: number = 20; // 每页条数
	totalItems: number = 200; // 总数

	constructor () {
	}

	ngOnInit () {
	}

	pageChanged (event: any): void {
		console.log(event);
	};
}
