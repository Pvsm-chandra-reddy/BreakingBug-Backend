const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware.js');

const {
    sellerRegister,
    sellerLogIn,
} = require('../controllers/sellerController.js'); // Bug 1: Incorrect controller import

const {
    productCreate,
    getProducts,
    getProductDetail,
    searchProductbyCategory,
    getSellerProducts,
    updateProduct,
    deleteProduct,
    deleteProducts,
    deleteProductReview,
    deleteAllProductReviews,
    addReview,
    getInterestedCustomers,
    getAddedToCartProducts,
} = require('../controllers/productController.js');

const {
    customerRegister,
    customerLogIn,
    getCartDetail,
    cartUpdate
} = require('../controllers/customerController.js');

const {
    newOrder,
    getOrderedProductsBySeller,
    getOrderedProductsByCustomer // Bug 2: Missing import
} = require('../controllers/orderController.js');

// Seller
router.post('/SellerRegister', sellerRegister);
router.post('/SellerLogin', sellerLogIn);

// router.get('/', (req, res) => {
//     res.send("Hello World!");
// });


// Product
router.post('/ProductCreate', authMiddleware, productCreate); // Bug 3: Missing authentication middleware
router.get('/getSellerProducts/:id', authMiddleware, getSellerProducts);
router.get('/getProducts', getProducts);
router.get('/getProductDetail/:id', getProductDetail);
router.get('/getInterestedCustomers/:id', authMiddleware, getInterestedCustomers);
router.get('/getAddedToCartProducts/:id', authMiddleware, getAddedToCartProducts);

router.put('/ProductUpdate/:id', authMiddleware, updateProduct);
router.put('/addReview/:id', authMiddleware, addReview);

router.get('/searchProduct/:key', searchProductbyCategory);
router.get('/searchProductbyCategory/:key', searchProductbyCategory);
router.get('/searchProductbySubCategory/:key', searchProductbyCategory);

router.delete('/DeleteProduct/:id', authMiddleware, deleteProduct);
router.delete('/DeleteProducts/:id', authMiddleware, deleteProducts);
router.delete('/deleteProductReview/:id', authMiddleware, deleteProductReview);
router.delete('/deleteAllProductReviews/:id', authMiddleware, deleteAllProductReviews); // Bug 4: Incorrect HTTP method

// Customer
router.post('/CustomerRegister', customerRegister);
router.post('/CustomerLogin', customerLogIn);
router.get('/getCartDetail/:id', authMiddleware, getCartDetail);
router.put('/CustomerUpdate/:id', authMiddleware, cartUpdate);

// Order
router.post('/newOrder', authMiddleware, newOrder);
router.get('/getOrderedProductsByCustomer/:id', authMiddleware, getOrderedProductsByCustomer); // Bug 5: Incorrect function name
router.get('/getOrderedProductsBySeller/:id', authMiddleware, getOrderedProductsBySeller);

module.exports = router; // Bug 6: Missing export statement