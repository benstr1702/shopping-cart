const avatarIconNames = [
	"fa-solid fa-person",
	"fa-solid fa-person-dress",
	"fa-solid fa-person-running",
	"fa-solid fa-person-skiing",
	"fa-solid fa-person-hiking",
	"fa-solid fa-baby",
	"fa-solid fa-user-secret",
	"fa-solid fa-person-biking",
	"fa-solid fa-user-graduate",
	"fa-solid fa-user-ninja",
	"fa-solid fa-user-doctor",
	"fa-solid fa-user-tie",
	"fa-solid fa-user-astronaut",
	"fa-solid fa-house-chimney-user",
	"fa-solid fa-bed",
	"fa-solid fa-person-swimming",
];

const cartIconNames = [
	"fa-solid fa-cart-shopping",
	"fa-solid fa-cart-flatbed",
	"fa-solid fa-dolly",
	"fa-solid fa-truck",
	"fa-solid fa-truck-fast",
	"fa-solid fa-cart-arrow-down",
	"fa-solid fa-cart-plus",
	"fa-solid fa-basket-shopping",
	"fa-solid fa-bag-shopping",
	"fa-brands fa-shopify",
];

const productData = [
	{
		name: "small combination",
		color: "dodgerblue",
		price: "9.99₪",
		icon: "fa-solid fa-dollar-sign",
		isSale: true,
		contains: [
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "green" },
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "red" },
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "yellow" },
		],
	},
	{
		name: "small set",
		color: "red",
		price: "39.99₪",
		icon: "fa-solid fa-dollar-sign",
		stars: 2,
		contains: [
			{ what: "wine", icon: "fa-solid fa-wine-bottle", color: "red" },
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "red" },
			{
				what: "hot-pepper",
				icon: "fa-solid fa-pepper-hot",
				color: "red",
			},
		],
	},
	{
		name: "small set",
		color: "green",
		price: "14.99₪",
		icon: "fa-solid fa-dollar-sign",
		isSale: true,
		stars: 4,
		contains: [
			{ what: "green", icon: "fa-solid fa-seedling", color: "green" },
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "green" },
			{
				what: "hot-pepper",
				icon: "fa-solid fa-pepper-hot",
				color: "green",
			},
		],
	},
	{
		name: "small set",
		color: "green",
		price: "20.99₪",
		icon: "fa-solid fa-dollar-sign",
		stars: 5,
		contains: [
			{ what: "green", icon: "fa-solid fa-seedling", color: "green" },
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "green" },
			{
				what: "hot-pepper",
				icon: "fa-solid fa-pepper-hot",
				color: "green",
			},
		],
	},
	{
		name: "medium combination",
		color: "greenyellow",
		price: "59.99₪",
		icon: "fa-solid fa-gift",
		contains: [
			[
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "green",
				},
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "green",
				},
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "green",
				},
			],
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "red" },
			[
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "yellow",
				},
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "yellow",
				},
			],
		],
	},
	{
		name: "medium set",
		color: "red",
		price: "109.99₪",
		icon: "fa-solid fa-gift",
		contains: [
			[
				{ what: "wine", icon: "fa-solid fa-wine-bottle", color: "red" },
				{ what: "wine", icon: "fa-solid fa-wine-bottle", color: "red" },
				{
					what: "wine",
					icon: "fa-solid fa-wine-bottle",
					color: "pink",
				},
				{
					what: "wine",
					icon: "fa-solid fa-wine-bottle",
					color: "pink",
				},
			],
			[
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "red",
				},
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "red",
				},
			],
			{
				what: "raspberry",
				icon: "fa-solid fa-raspberry-pi",
				color: "red",
			},
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "red" },
			{
				what: "hot-pepper",
				icon: "fa-solid fa-pepper-hot",
				color: "red",
			},
		],
	},

	{
		name: "large combination",
		color: "purple",
		price: "209.99₪",
		icon: "fa-solid fa-boxes-packing",
		contains: [
			[
				{ what: "wine", icon: "fa-solid fa-wine-bottle", color: "red" },
				{ what: "wine", icon: "fa-solid fa-wine-bottle", color: "red" },
				{
					what: "wine",
					icon: "fa-solid fa-wine-bottle",
					color: "pink",
				},
				{
					what: "wine",
					icon: "fa-solid fa-wine-bottle",
					color: "pink",
				},
				[
					{
						what: "wine",
						icon: "fa-solid fa-wine-glass",
						color: "cornflowerblue",
					},
					{
						what: "wine",
						icon: "fa-solid fa-wine-glass",
						color: "cornflowerblue",
					},
					{
						what: "wine",
						icon: "fa-solid fa-wine-glass",
						color: "cornflowerblue",
					},
					{
						what: "wine",
						icon: "fa-solid fa-wine-glass",
						color: "violet",
					},
					{
						what: "wine",
						icon: "fa-solid fa-wine-glass",
						color: "violet",
					},
				],
				[
					{
						what: "wine",
						icon: "fa-solid fa-martini-glass",
						color: "pink",
					},
					{
						what: "wine",
						icon: "fa-solid fa-martini-glass",
						color: "orange",
					},
					{
						what: "wine",
						icon: "fa-solid fa-martini-glass",
						color: "pink",
					},
					{
						what: "wine",
						icon: "fa-solid fa-martini-glass",
						color: "orange",
					},
					{
						what: "wine",
						icon: "fa-solid fa-martini-glass",
						color: "orange",
					},
				],
			],
			[
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "red",
				},
				{
					what: "apple",
					icon: "fa-solid fa-apple-whole",
					color: "red",
				},
			],
			[
				{
					what: "raspberry",
					icon: "fa-solid fa-raspberry-pi",
					color: "purple",
				},
				{
					what: "raspberry",
					icon: "fa-solid fa-raspberry-pi",
					color: "purple",
				},
				{
					what: "raspberry",
					icon: "fa-solid fa-raspberry-pi",
					color: "red",
				},
				{
					what: "raspberry",
					icon: "fa-solid fa-raspberry-pi",
					color: "red",
				},
			],
			{ what: "apple", icon: "fa-solid fa-apple-whole", color: "red" },
			{
				what: "hot-pepper",
				icon: "fa-solid fa-pepper-hot",
				color: "red",
			},
		],
	},
];
