$(() => {
    $('.hideAll').on('click', hideAll)
    $('#fighterBuilder').on('click', showFighter)
    $('#cargoBuilder').on('click', showCargo)
    $('#minerBuilder').on('click', showMiner)
    $('#build').on('click', () => {
        let [ship, type] = getVals()
        buildShip(ship, type)
        console.log(ship, type)
    })
})

let shipyard = [];

const getVals = () => {
    let ship = readInputs()
    let type = getType()

    return [ship, type]
}
let objShip = new Object;

const buildShip = (ship, type) => {
    switch (type) {
        case 'fighter':
            shipyard.push(new Fighter(ship))
            showCard(new Fighter(ship), type, shipyard)
            break;
        case 'cargo':
            shipyard.push(new Cargo(ship))
            showCard(new Cargo(ship), type, shipyard)
            break;
        case 'miner':
            shipyard.push(new Mining(ship))
            showCard(new Mining(ship), type, shipyard)
            break;
        default:
            break;
    }
}

// Try to use one of these two for the homework
// Object.keys
// for..in

function showCard(objShip, type, array) {
    for (const x in objShip) {
        let valueOf = array[0][x]
        $('.card-title').html(`${type}`);
        $('#show-text').append(`<li>${x} : ${valueOf}</li>`);
    }
}
