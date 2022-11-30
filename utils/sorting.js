
const getValueFromNationality = (shipgirl) => {
    switch (shipgirl.nationality) {
        case 'Universal':
            return -100;
        case 'Eagle Union':
            return 0;
        case 'Royal Navy':
            return 100;
        case 'Sakura Empire':
            return 200;
        case 'Iron Blood':
            return 300;
        case 'Dragon Empery':
            return 400;
        case 'Sardegna Empire':
            return 500;
        case 'Northern Parliament':
            return 600;
        case 'Iris Libre':
            return 700;
        case 'Vichya Dominion':
            return 800;
        case 'META':
            return 900;
        default:
            return 1000;
    }
}

const getValueFromHullType = (shipgirl) => {
    switch (shipgirl.hullType) {
        case 'Destroyer':
            return -10;
        case 'Light Cruiser':
            return 0;
        case 'Heavy Cruiser':
            return 10;
        case 'Large Cruiser':
            return 20;
        case 'Battlecruiser':
            return 30;
        case 'Battleship':
            return 40;
        case 'Aircraft Carrier':
            return 50;
        case 'Light Carrier':
            return 55;
        case 'Submarine':
            return 60;
        default:
            return 70;
    }
}

const getValueFromRarity = (shipgirl) => {
    switch (shipgirl.rarity) {
        case 'Normal':
            return -1;
        case 'Rare':
            return 0;
        case 'Epic':
            return 1;
        case 'Elite':
            return 1;
        case 'Super Rare':
            return 2;
        case 'Priority':
            return 2;
        case 'Decisive':
            return 3;
        case 'Ultra Rare':
            return 3;
        default:
            return 4;
    }
}
 
const sortShipgirls = (a, b) => {
    const shipgirlA = getValueFromNationality(a) + getValueFromHullType(a) + getValueFromRarity(a);
    const shipgirlB = getValueFromNationality(b) + getValueFromHullType(b) + getValueFromRarity(b);
    return shipgirlA - shipgirlB;
}

module.exports = {
    sortShipgirls,
}