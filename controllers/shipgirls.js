const { AzurAPI } = require('@azurapi/azurapi');

const { sortShipgirls } = require('./../utils/sorting');

const client = new AzurAPI();

const getAllShipgirls = (req, res) => {
    const { n = '', r = '', h = '', s = '' } = req.query;

    try {
        let shipgirls = client.ships.map((ship) => ({
            id: ship.id,
            name: ship.names.en,
            thumbnail: ship.thumbnail,
            rarity: ship.rarity,
            nationality: ship.nationality ?? 'Unknown',
            hullType: ship.hullType,
        })).sort(sortShipgirls);

        if (n.trim().length > 0) {
            shipgirls = shipgirls.filter((ship) => ship.nationality === n);
        }
        if (r.trim().length > 0) {
            shipgirls = shipgirls.filter((ship) => ship.rarity === r);
        }
        if (h.trim().length > 0) {
            shipgirls = shipgirls.filter((ship) => ship.hullType === h);
        }
        if (s.trim().length > 0) {
            shipgirls = shipgirls.filter((ship) => ship.name.toLowerCase().includes(s.toLowerCase()));
        }

        res.status(200).json({
            message: 'Operation was successful!',
            shipgirls,
            total: shipgirls.length,
        });
    } catch (error) {
        console.log('getAllShipgirls', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getShipgirl = (req, res) => {
    const { name } = req.params;

    try {
        const shipgirlData = client.ships.get(name);

        if (shipgirlData) {
            const shipgirl = {
                id: shipgirlData.id,
                names: shipgirlData.names,
                hullType: shipgirlData.hullType,
                rarity: shipgirlData.rarity,
                class: shipgirlData.class,
                skills: shipgirlData.skills,
                misc: shipgirlData.misc,
                skins: shipgirlData.skins,
                nationality: shipgirlData.nationality ?? 'Unknown',
                thumbnail: shipgirlData.thumbnail,
                obtainedFrom: shipgirlData.obtainedFrom,
                construction: shipgirlData.construction,
            }

            res.status(200).json({ message: 'Operation was successful!', shipgirl });
        } else {
            res.status(404).json({ message: 'Shipgirl not found!' });
        }
    } catch (error) {
        console.log('getShipgirl', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAllShipgirls,
    getShipgirl,
}