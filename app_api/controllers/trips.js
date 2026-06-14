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

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const tripsAddTrip = async (req, res) => {
    try {
        const trip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        res.status(201).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

const tripsUpdateTrip = async (req, res) => {
    try {
        const tripCode = req.params.tripCode;

        const trip = await Trip.findOneAndUpdate(
            { code: tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

const tripsDeleteTrip = async (req, res) => {
    try {
        const tripCode = req.params.tripCode;

        const trip = await Trip.findOneAndDelete({ code: tripCode });

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(204).send();
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};