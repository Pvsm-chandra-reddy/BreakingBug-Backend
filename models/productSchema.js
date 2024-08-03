const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.ObjectId,
        ref: "CUSTOMERS", // Bug: Changed from "customer" to "CUSTOMERS" to match the customer schema
        required: true,
    },
    shippingData: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
        },
        phoneNo: {
            type: String, // Bug: Changed from Number to String
            required: true,
        },
    },
    orderedProducts: [{
        productName: {
            type: String
        },
        price: {
            mrp: {
                type: Number
            },
            cost: {
                type: Number
            },
            discountPercent: {
                type: Number
            }
        },
        subcategory: {
            type: String, // Bug: Changed from mongoose.Schema.Types.ObjectId to String
        },
        productImage: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },
        tagline: {
            type: String
        },
        quantity: {
            type: Number
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SELLERS' // Bug: Changed from "seller" to "SELLERS" to match the seller schema
        },
    }],
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    paidAt: {
        type: Date,
        required: true,
    },
    productsQuantity: {
        type: Number,
        required: true,
        default: 0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 20,
    },
    orderStatus: {
        type: String,
        required: true,
    },
    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("ORDERS", orderSchema); // Bug: Changed from "customer" to "ORDERS" to correctly name the model
