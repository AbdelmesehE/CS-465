const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find();

        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }

        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const tripCode = req.params.tripCode;

        if (!tripCode) {
            return res.status(400).json({ message: 'Trip code is required' });
        }

        const trip = await Trip.findOne({ code: tripCode });

         if (!trip){
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};