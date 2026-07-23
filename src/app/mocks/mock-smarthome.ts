export interface DeviceConfig {
	id: string;
	name: string;
	type: 'light' | 'audio' | 'climate';
	minValue: number;
	maxValue: number;
	defaultValue: number;
	unit: string;
}

export interface SmartHomeState {
	isMasterPowerOn: boolean;
	ecoMode: boolean;
	light: number;
	audioVolume: number;
	temperature: number;
}

export const SMART_DEVICES: DeviceConfig[] = [
	{
		id: 'light_1',
		name: 'Свет',
		type: 'light',
		minValue: 0,
		maxValue: 100,
		defaultValue: 50,
		unit: '%',
	},
	{
		id: 'audio_1',
		name: 'Музыка',
		type: 'audio',
		minValue: 0,
		maxValue: 100,
		defaultValue: 20,
		unit: '%',
	},
	{
		id: 'climate_1',
		name: 'Климат',
		type: 'climate',
		minValue: 16,
		maxValue: 30,
		defaultValue: 22,
		unit: '°C',
	},
];

// default
export const INITIAL_HOME_STATE: SmartHomeState = {
	isMasterPowerOn: true,
	ecoMode: false,
	light: 50,
	audioVolume: 20,
	temperature: 22,
};
