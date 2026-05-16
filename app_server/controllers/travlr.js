module.exports.home = function(req, res) {
    res.render('travlr', {
        title: 'Travlr Getaways'
    });
};

module.exports.travel = function(req, res) {
    res.render('travel', {
        title: 'Travel',
        trips: [
            {
                code: 'B0101',
                name: 'Cancun',
                length: '4 nights / 5 days',
                start: 'Feb 14, 2021',
                resort: 'Emerald Bay, 3-stars',
                perPerson: '$799'
            },
            {
                code: 'B0103',
                name: 'Barbados',
                length: '5 nights / 6 days',
                start: 'Feb 28, 2021',
                resort: 'Castaway Cove, 4-stars',
                perPerson: '$1299'
            },
            {
                code: 'B0401',
                name: 'Panama City',
                length: '4 nights / 5 days',
                start: 'Mar 21, 2021',
                resort: 'Sunseeker Surf, 4-stars',
                perPerson: '$1199'
            },
            {
                code: 'B0701',
                name: 'Tahiti',
                length: '6 nights / 7 days',
                start: 'Mar 28, 2021',
                resort: 'Hedonist Heaven, 5-stars',
                perPerson: '$1799'
            },
            {
                code: 'B0901',
                name: 'French Riviera',
                length: '5 nights / 6 days',
                start: 'Apr 11, 2021',
                resort: 'Chateau Royal, 5-stars',
                perPerson: '$2499'
            }
        ]
    });
};

module.exports.login = function(req, res) {
    res.render('login', {
        title: 'Login'
    });
};