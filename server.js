const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const products = [
  {
    title: 'Product 1',
    image1: './images/image1.jpg',
    image2: './images/image2.jpg',
    badge: 'Best Seller',
    discount: 10,
    rating: 4,
    reviews: 25,
    price: '$49.99',
    url: '#',
  },
  {
    title: 'Product 2',
    image1: './images/image3.jpg',
    image2: './images/image4.jpg',
    badge: 'Hot Item',
    discount: 20,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 3',
    image1: './images/image5.jpg',
    image2: './images/image6.jpg',
    badge: 'Best Seller',
    discount: 30,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 4',
    image1: './images/image7.jpg',
    image2: './images/image8.jpg',
    badge: 'Best Seller',
    discount: 10,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 5',
    image1: './images/image9.jpg',
    image2: './images/image10.jpg',
    badge: 'Best Seller',
    discount: 15,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 6',
    image1: './images/image11.jpg',
    image2: './images/image12.jpg',
    badge: 'Best Seller',
    discount: 25,
    rating: 3,
    reviews: 48,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 7',
    image1: './images/image13.jpg',
    image2: './images/image14.jpg',
    badge: 'Hot Item',
    discount: 25,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 8',
    image1: './images/image15.jpg',
    image2: './images/image16.jpg',
    badge: 'Best Se;;er',
    discount: 15,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 9',
    image1: './images/image17.jpg',
    image2: './images/image18.jpg',
    badge: 'Hot Item',
    discount: 15,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  },
  {
    title: 'Product 10',
    image1: './images/image19.jpg',
    image2: './images/image20.jpg',
    badge: 'Best Seller',
    discount: 15,
    rating: 5,
    reviews: 40,
    price: '$59.99',
    url: '#',
  }
];

app.get('/', (req, res) => {
  res.render('index', { products });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
