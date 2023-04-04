const db = require('./connection');
const { User, Product, Category, Review } = require('../models');

db.once('open', async () => {
	await Category.deleteMany();

	const categories = await Category.insertMany([
		{ name: 'Music' },
		{ name: 'Photography' },
		{ name: 'Art Prints' },
		{ name: 'E-Books' },
		{ name: 'Decor' },
	]);

	await Product.deleteMany();

    const products = await Product.insertMany([
        {
            productName: 'Mystic Mountains',
            productDescription:'Beautiful landscape of mystic mountains.',
            price: 69.99,
            category: categories[1]._id,
            reviews: ["Beautiful", "Love mine"],
            rating: 5,
            fileType: "jpg",
            s3key: "mystic mountains.jpg"
        },
        {
            productName: 'Bangin',
            productDescription:'Rock music to make your day!',
            price: 9.99,
            category: categories[0]._id,
            reviews: ["Classic", "Rock out!"],
            rating: 7,
            fileType: "mp3",
            s3key: "istockphoto-1064852106-612x612.jpg"
        },
        {
            productName: 'Puppies',
            productDescription:'Paint print of precious puppies',
            price: 79.99,
            category: categories[2]._id,
            reviews: ["Beautiful", "so cute!"],
            rating: 6,
            fileType: "jpg",
            s3key: "puppies.jpg"
        },
        {
            productName: 'Once Upon A Time...',
            productDescription:'A story unlike any other story.',
            price: 9.99,
            category: categories[3]._id,
            reviews: ["Riveting", "Tender story"],
            rating: 3,
            fileType: "pdf",
            s3key: "01-reference-volcanoes-cb9bmt_2x1.webp"
        },
        {
            productName: 'You can do it!',
            productDescription:'Uplifting quote in stylish decor for you to print and put on display',
            price: 1.99,
            category: categories[4]._id,
            reviews: ["Beautiful", "Powerful!"],
            rating: 4,
            fileType: "pdf",
            s3key: "istockphoto-1140264906-612x612.jpg"
        },
        {
            productName: 'Sunrise',
            productDescription:'Breathtaking sunrise photo.',
            price: 42.99,
            category: categories[1]._id,
            reviews: ["Breathtaking", "Incredible shot!"],
            rating: 10,
            fileType: "jpg",
            s3key: "Sunrise.webp"
        },
        {
            productName: 'Light',
            productDescription:'Relaxing, calm, light music.',
            price: 9.99,
            category: categories[0]._id,
            reviews: ["Beautiful", "Serene"],
            rating: 5,
            fileType: "mp3",
            s3key: "lightbulb.webp"
        },
        {
            productName: 'Mysterious Happenings',
            productDescription:'A mystery novel to make you question everything!',
            price: 19.99,
            category: categories[3]._id,
            reviews: ["Intense!", "Great story!"],
            rating: 5,
            fileType: "pdf",
            s3key: "mysterious.jpg"
        },
        {
            productName: 'Serenity',
            productDescription:'Peaceful painting print',
            price: 69.99,
            category: categories[2]._id,
            reviews: ["An escape!", "Peace in a frame!"],
            rating: 6,
            fileType: "jpg",
            s3key: "11051605_serenity.jpg"
        },
        {
            productName: 'Vintage Wine Labels',
            productDescription:'Vintage wine lable printable PDF for all your decor needs.',
            price: 1.99,
            category: categories[4]._id,
            reviews: ["Beautiful", "Great decor for my kitchen"],
            rating: 8,
            fileType: "pdf",
            s3key: "wine label.jpg"
        },
    ]);

	await User.deleteMany();

	await User.create({
		firstName: 'Pamela',
		lastName: 'Washington',
		cart: [],
		isSeller: false,
		isAdmin: true,
		username: 'MissWashington',
		email: 'pamela@testmail.com',
		password: 'password12345',
		purchased: [
			{
				products: [products[0]._id, products[0]._id, products[1]._id],
			},
		],
	});

    await User.create({
        firstName: 'Elijah',
        lastName: 'Washington',
        cart: [],
        isSeller: false,
        isAdmin: false,
        username: "eliwash",
        email: 'elijah@testmail.com',
        password: 'password1234567',
        purchased: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

	process.exit();
});
