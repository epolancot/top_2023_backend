const ObjectId = require('mongoose').Types.ObjectId;

require('dotenv').config();
require('./config/database');

const Card = require('./models/Card');

(async function() {
    await Card.deleteMany({})
    const cards = await Card.create([
        {
            // Card 1 (Poor-Fair Credit)
            name: "CARD 1",
            creditGroup: "Poor-Fair",
            apr: {
                "Poor-Fair": 0.297,
                "Good": 0.279,
                "Great": 0,
            },
            gracePeriod: 26,
            lateFee: 28,
            rewards: "Earn 1% cash back on all purchases & a lowered interest rate with consistent on time payments.",
        },
        {
            // Card 2 (Good Credit)
            name: "CARD 2",
            creditGroup: "Good",
            apr: {
                "Poor-Fair": 0.162,
                "Good": 0.157,
                "Great": 0.128,
            },
            gracePeriod: 24,
            lateFee: 28,
            rewards: "Earn 3% cash back on groceries and gas, Introductory 0% APR for 12 months, & access to free credit score monitoring",
        },
        {
            // Card 3 (Great Credit)
            name: "CARD 3",
            creditGroup: "Great",
            apr: {
                "Poor-Fair": 0.14,
                "Good": 0.24,
                "Great": 0.20,
            },
            gracePeriod: 22,
            lateFee: 28,
            rewards: "Earn 5% cash back on groceries, gas, and dining, complimentary access to airport lounges, elite status in hotel loyalty programs.",
        },
    ]);

    console.log(cards)
    
    process.exit();
})();


/*
const cards = [
    {
        // Card 1 (Poor-Fair Credit)
        name: "CARD 1",
        creditGroup: "Poor-Fair",
        apr: {
            "Poor-Fair": 0.297,
            "Good": 0.22,
            "Great": 0.18,
        },
        gracePeriod: 26,
        lateFee: 28,
        rewards: "Earn 1% cash back on all purchases & a lowered interest rate with consistent on time payments.",
    },
    {
        // Card 2 (Good Credit)
        name: "CARD 2",
        creditGroup: "Good",
        apr: {
            "Poor-Fair": 0.25,
            "Good": 0.162,
            "Great": 0.15,
        },
        gracePeriod: 24,
        lateFee: 28,
        rewards: "Earn 3% cash back on groceries and gas, Introductory 0% APR for 12 months, & access to free credit score monitoring",
    },
    {
        // Card 3 (Great Credit)
        name: "CARD 3",
        creditGroup: "Great",
        apr: {
            "Poor-Fair": 0.2,
            "Good": 0.18,
            "Great": 0.15,
        },
        gracePeriod: 22,
        lateFee: 28,
        rewards: "Earn 5% cash back on groceries, gas, and dining, complimentary access to airport lounges, elite status in hotel loyalty programs.",
    },
]
*/