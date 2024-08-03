const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Customer"
    },
    cartDetails: [{
        productName: {
            type: String
        },
        price: {
            mrp: {
                type: Number // Bug1: Changed from String to Number
                // Comment: The mrp (Maximum Retail Price) should be a Number, not a String
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
            type: Number
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SELLER'
        },
    }],
    shippingData: {
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String // Bug2: Changed from Number to String
            // Comment: Country should be a String, not a Number
        },
        pinCode: {
            type: Number,
        },
        phoneNo: {
            type: String // Bug3: Changed from Number to String
            // Comment: Phone numbers are typically stored as Strings to preserve leading zeros and allow for special characters like '+' for country codes
        },
    }
});

module.exports = mongoose.model("CUSTOMERS", customerSchema); // Bug4: Changed from "customer" to "CUSTOMERS" because of the reference in the productSchema. This ensures that the reference is correct and the data is stored correctly.
