const home = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways'
    });
};

const travel = async (req, res) => {

    const tripsEndpoint = 'http://localhost:3000/api/trips';

    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    };

    try {

        const response = await fetch(tripsEndpoint, options);
        const json = await response.json();

        if (!Array.isArray(json)) {
            return res.status(500).send('API did not return an array');
        }

        if (json.length === 0) {
            return res.status(404).send('No trips found');
        }

        res.render('travel', {
            title: 'Travel',
            trips: json
        });

    } catch (err) {

        res.status(500).send(err.message);

    }
};

const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms'
    });
};

const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals'
    });
};

const news = (req, res) => {
    res.render('news', {
        title: 'News'
    });
};

const about = (req, res) => {
    res.render('about', {
        title: 'About'
    });
};

const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
};

module.exports = {
    home,
    travel,
    rooms,
    meals,
    news,
    about,
    contact
};