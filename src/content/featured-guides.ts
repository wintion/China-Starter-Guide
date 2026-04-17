export const featuredGuides = [
	{
		title: 'First Time in China',
		description: 'A step-by-step path for your first trip, from prep to arrival day.',
		href: '/guides/first-time-in-china',
		iconKey: 'start',
		priority: 1,
	},
	{
		title: 'How to Pay in China',
		description: 'Set up mobile wallets, use QR payments, and avoid common failures.',
		href: '/guides/payment/how-to-pay-in-china',
		iconKey: 'pay',
		priority: 2,
	},
	{
		title: 'Is China Safe?',
		description: 'What safety is really like and what actually deserves attention.',
		href: '/guides/prepare/is-china-safe',
		iconKey: 'safe',
		priority: 3,
	},
	{
		title: 'From Airport to City',
		description: 'Choose the metro first, know when to take a car, and arrive calmly.',
		href: '/guides/transport/airport-to-city',
		iconKey: 'airport',
		priority: 4,
	},
	{
		title: 'Seeing a Doctor in China',
		description: 'Choose the right care path fast: pharmacy, clinic, hospital, or emergency.',
		href: '/guides/medical/see-a-doctor-in-china',
		iconKey: 'medical',
		priority: 5,
	},
] as const;
