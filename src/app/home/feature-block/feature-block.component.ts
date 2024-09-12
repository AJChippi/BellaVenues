import { Component, Input } from '@angular/core';
import { Feature1 } from '../models/feature1.model';

@Component({
    selector: 'app-feature-block',
    templateUrl: './feature-block.component.html',
    standalone: true,
})
export class FeatureBlockComponent {
	@Input() feature1: Feature1;
}
