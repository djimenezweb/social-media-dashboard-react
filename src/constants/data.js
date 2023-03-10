import { v4 } from 'uuid';

const followersData = [
	{
		id: v4(),
		socialMedia: 'fb',
		color1: '#178FF5',
		color2: null,
		color3: null,
		user: '@nathanf',
		count: 1987,
		unit: 'Followers',
		today: 12
	},
	{
		id: v4(),
		socialMedia: 'tw',
		color1: '#1DA1F2',
		color2: null,
		color3: null,
		user: '@nathanf',
		count: 1044,
		unit: 'Followers',
		today: 99
	},
	{
		id: v4(),
		socialMedia: 'ig',
		color1: '#FDC366',
		color2: '#EE877E',
		color3: '#DF4896',
		user: '@realnathanf',
		count: 11000,
		unit: 'Followers',
		today: 1099
	},
	{
		id: v4(),
		socialMedia: 'yt',
		color1: '#C4032B',
		color2: null,
		color3: null,
		user: 'Nathan F.',
		count: 8239,
		unit: 'Subscribers',
		today: -144
	}
];

const todayData = [
	{ id: v4(), socialMedia: 'fb', counter: 87, unit: 'Page Views', change: 3 },
	{ id: v4(), socialMedia: 'fb', counter: 52, unit: 'Likes', change: -2 },
	{ id: v4(), socialMedia: 'ig', counter: 5462, unit: 'Likes', change: 2257 },
	{
		id: v4(),
		socialMedia: 'ig',
		counter: 52000,
		unit: 'Profile Views',
		change: 1375
	},
	{ id: v4(), socialMedia: 'tw', counter: 117, unit: 'Retweets', change: 303 },
	{ id: v4(), socialMedia: 'tw', counter: 507, unit: 'Likes', change: 553 },
	{ id: v4(), socialMedia: 'yt', counter: 107, unit: 'Likes', change: -19 },
	{
		id: v4(),
		socialMedia: 'yt',
		counter: 1407,
		unit: 'Total Views',
		change: -12
	}
];

export { followersData, todayData };
