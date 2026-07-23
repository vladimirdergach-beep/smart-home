import { Component, inject } from '@angular/core';
import { EcoToggle } from '../eco-toggle/eco-toggle';
import { SmartCard } from '../smart-card/smart-card';
import { SmartHomeService } from '../../services/smart-home';

@Component({
	selector: 'app-dashboard',
	imports: [SmartCard, EcoToggle],
	templateUrl: './dashboard.html',
	styleUrl: './dashboard.css',
})
export class Dashboard {
	public readonly smartHome = inject(SmartHomeService);
}
