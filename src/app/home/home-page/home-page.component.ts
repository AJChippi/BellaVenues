import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Feature1 } from 'src/app/home/models/feature1.model';
import { FeatureBlockComponent } from '../feature-block/feature-block.component';

interface Header {

}

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	standalone: true,
	imports: [RouterLink, AsyncPipe, FeatureBlockComponent],
})
export class HomePageComponent implements OnInit {
	header$: Observable<Header>;
	features1$: Observable<Feature1[]>;


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
	getBlockData(database: string, id?: number) {
		this.features1$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
	}