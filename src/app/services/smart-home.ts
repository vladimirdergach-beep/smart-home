import { Service, signal, computed, effect } from '@angular/core';
import { INITIAL_HOME_STATE, SMART_DEVICES, DeviceConfig } from '../mocks/mock-smarthome';

@Service()
export class SmartHomeService {
	public readonly devices = signal(SMART_DEVICES);

	public readonly powerOn = signal(INITIAL_HOME_STATE.isMasterPowerOn);
	public readonly ecoMode = signal(INITIAL_HOME_STATE.ecoMode);
	public readonly volumeWarning = signal('');

	public readonly light = signal(INITIAL_HOME_STATE.light);
	public readonly audioVolume = signal(INITIAL_HOME_STATE.audioVolume);
	public readonly temperature = signal(INITIAL_HOME_STATE.temperature);

	public readonly sumConsumption = computed(() => {
		if (this.powerOn()) {
			const lightCost = this.light() * 1.5;
			const audioCost = this.audioVolume() * 0.9;
			const temperatureCost = this.temperature() > 22 ? 200 : 50;

			return lightCost + audioCost + temperatureCost;
		}
		return 0;
	});

	public togglePower(): void {
		this.powerOn.update((v) => !v);
	}

	public readonly homeStatus = computed(() => {
		if (this.sumConsumption() > 250) {
			return 'Высокое энергопотребление';
		} else if (!this.powerOn()) {
			return 'Дом обесточен';
		} else {
			return 'Все системы в норме';
		}
	});

	public updater(type: DeviceConfig['type'], change: number): void {
		if (!this.powerOn()) {
			return;
		}

		if (this.ecoMode() && type !== 'audio') {
			return;
		}

		let deviceToUpdate: DeviceConfig | undefined;

		for (const device of this.devices()) {
			if (device.type === type) {
				deviceToUpdate = device;
				break;
			}
		}

		if (!deviceToUpdate) {
			return;
		}

		switch (type) {
			case 'light':
				this.light.update((v) => this.limitValue(v + change, deviceToUpdate.minValue, deviceToUpdate.maxValue));
				break;

			case 'audio':
				this.audioVolume.update((v) =>
					this.limitValue(v + change, deviceToUpdate.minValue, deviceToUpdate.maxValue),
				);
				break;

			case 'climate':
				this.temperature.update((v) =>
					this.limitValue(v + change, deviceToUpdate.minValue, deviceToUpdate.maxValue),
				);
				break;
		}
	}

	private limitValue(value: number, minValue: number, maxValue: number): number {
		return Math.min(Math.max(value, minValue), maxValue);
	}

	private readonly ecoModeEffect = effect(() => {
		if (this.ecoMode()) {
			this.light.set(20);
			this.temperature.set(22);
		}
	});

	private readonly volumeWarningEffect = effect(() => {
		if (this.audioVolume() > 80) {
			this.volumeWarning.set('Громкость музыки превышает 80%');
		} else {
			this.volumeWarning.set('');
		}
	});

	public getDevice(type: DeviceConfig['type']): number {
		switch (type) {
			case 'light':
				return this.light();
			case 'audio':
				return this.audioVolume();
			case 'climate':
				return this.temperature();
		}
	}
}
