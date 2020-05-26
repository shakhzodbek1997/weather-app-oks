import i18n from 'i18next';

const options = {
	fallbackLng: 'ru',
	ns: ['main'],
	defaultNS: 'main',
	keySeparator: false,
	interpolation: {
		escapeValue: false,
		formatSeparator: ','
	},
	react: {
		wait: true
	},
};
options.resources = {
	en: {
		main: {
			'Трибуна.уз': 'TribunaUZ',
		}
	},
	ru: {
		main: {
			'Трибуна.уз': 'Трибуна.уз',
		}
	},
	uz: {
		main: {
			'Трибуна.уз': 'Трибуна.уз',
		}
	},
	oz: {
		main: {
			'Трибуна.уз': 'TribunaUZ',
		}
	},
};

export default () => {

	i18n
		.init(options);

	return i18n;
};