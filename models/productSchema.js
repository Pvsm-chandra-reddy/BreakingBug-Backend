const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
        type: String
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
        type: Number,
        default: 45
    },
    reviews: [{
        rating: {
            type: Number,
        },
        comment: {
            type: String,
        },
        reviewer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CUSTOMERS", // Bug: Ensure the reference matches the customer schema
        },
        date: {
            type: Date,
            default: Date.now, // Bug: Corrected to Date.now()
        },
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller',
    },
}, { timestamps: true }); // Bug: If you want Mongoose to automatically manage createdAt and updatedAt timestamps for your documents, you should set timestamps to true. Setting it to false disables this feature.

module.exports = mongoose.model("PRODUCTS", productSchema); // Bug: Changed from "product" to "PRODUCTS" to match naming conventions