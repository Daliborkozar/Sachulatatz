import bcrypt from 'bcryptjs'

//remove ID - ID will be handled automaticaly by backend

const data = {
    users: [
        {
            name: 'Dalibor',
            email: 'admin@example.com',
            password: bcrypt.hashSync('12345',8),
            isAdmin: true,
        },
        {
            name: 'Miroslav',
            email: 'user@example.com',
            password: bcrypt.hashSync('12345',8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'God Save The Queen',
            category: 'Shirts',
            image: '/images/slika1.jpg',
            salePrice: 900,
            price: 1200,
            rating: 4.5,
            numReviews: 10,
            descpription: 'hight quality shirt',
            countInStock: 10
        },
        { 
            name: 'Kontroverzni poljoprivrednik',
            category: 'Shirts',
            image: '/images/slika2.jpg',
            price: 1200,
            salePrice: null,
            rating: 3.5,
            numReviews: 10,
            descpription: 'hight quality shirt',
            countInStock: 2
        },
        {
            name: 'zemun',
            category: 'Shirts',
            image: '/images/slika3.jpg',
            price: 1200,
            salePrice: null,
            rating: 4.5,
            numReviews: 10,
            descpription: 'hight quality shirt',
            countInStock: 10
        }
    ]
}

export default data