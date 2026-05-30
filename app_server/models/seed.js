const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('./db');

const Trip = require('./travlr');

const tripsPath = path.join(__dirname, '..', 'data', 'trips.json');
const tripsData = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        console.log('Existing trips removed');

        await Trip.insertMany(tripsData);
        console.log('Trips data loaded successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error('Error loading trips:', err);
        mongoose.connection.close();
    }
};

seedDB();