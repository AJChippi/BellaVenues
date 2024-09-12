import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Header {

}
interface Feature{
	id: number;
	icon: string;
	title: string;
	description: string;
}

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	standalone: true,
	imports: [RouterLink, AsyncPipe],
})
export class HomePageComponent implements OnInit {
	header$: Observable<Header>;
	features1$: Observable<Feature[]>;


	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 7);
		this.getBlockData("feature1");

	}

	getPageData(database: string, id?: number): void {
		this.header$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
	getBlockData(database: string) {
		this.features1$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
	}