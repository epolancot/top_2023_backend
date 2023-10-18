const Card = require('../../models/Card');

module.exports = {
    index,
};

async function index(req, res) {
    const cards = await Card.find({});
    res.json(cards);
}