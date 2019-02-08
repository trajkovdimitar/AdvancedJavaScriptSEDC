// StarShip Project

class Starships {
    constructor(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship) {
        this.name = name;
        this.pilot = pilot;
        this.fuelTankCapacity = fuelTankCapacity;
        this.currentLocation = currentLocation;
        this.typeOfStarship = typeOfStarship;
    }
    startEngines() {
        return `${name} has started the engines!`
    }
    takeOff() {
        return `Starship ${name} took off!`
    }
    land() {
        return `The ship ${name} has landed!`
    }
}

class Fighter extends Starships {
    constructor(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship, weapons, shield, numberOfKills) {
        super(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship);
        this.weapons = weapons;
        this.shield = shield;
        this.numberOfKills = numberOfKills;
    }
    shootWeaponONe() {
        return `Shot has been fired with ${weapons}!!!`
    }
}
class Cargo extends Starships {
    constructor(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship, cargoCapacity, manifest, loadingCranes) {
        super(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship)
        this.cargoCapacity = cargoCapacity;
        this.manifest = manifest;
        this.loadingCranes = loadingCranes;
    }
    load() {
        return `The ${name} has loaded the ${loadingCranes}!`
    }

    unload() {
        return `The ${name} has unloaded the ${loadingCranes}!`
    }
}

class MiningShip extends Starships {
    constructor(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship, tools, types, storageCapacity) {
        super(name, pilot, fuelTankCapacity, currentLocation, typeOfStarship);
        this.tools = tools;
        this.types = types;
        this.storageCapacity = storageCapacity;
    }
    mine() {
        return `The ship has started mining.`
    }
    storageTemperature() {
        return `The storage temperature is set!!!`;
    }
}

document.getElementById('submit').addEventListener('click', () => {
    let value = $('#typeOfShip option:selected').val();
    switch (value) {
        case "Fighter":
            console.log('I am the fighter!')
            fnFighter();
            break;
        case 'Cargo':
            console.log('I am cargo!')
            fnCargo();
            break;
        case 'MiningShip':
            console.log('I am the miner!')
            fnMiningShip();
            break;
    }
})

// Fighter 
function fnFighter() {
    $('#starWars').html(`
    <label for="weapons">Choose the weapon</label> <br>
    <input type="text" id="weapons"> <br>
    <label for="shield">What is the shield???</label> <br>
    <input type="text" id="shield"> <br>
    <label for="numberOfKills">How many kills does the ship have?</label><br>
    <input type="text" id="numberOfKills"><br>
    <button id="submit-1">Submit</button>
`);
    $('#submit-1').on('click', () => {
        console.log('I just got the event from submit-1 button!');
        $('#result').html(`    
    <h2>This is your fighter StarShip!</h2> <br>
    <img src="img/fighterStarship.png" alt="fighterShip" height="100%" width="100%"> <br>      
    `)
    
    let fName = $('#name').val();
    console.log('Fighter Name:', fName);
    let fPilot = $('#pilot').val();
    console.log('Fighter Pilot', fPilot);
    let fFuel = $('#fuel').val();
    console.log('Cargo Starship(Fuel)=>', fFuel);
    let fLocation = $('#location').val();
    console.log('Location of the ship: ', fLocation);
    let weapons = $('#weapons').val();
    console.log('weapons:', weapons);
    let shield = $('#shield').val();
    console.log('shield:', shield);
    let numberOfKills = $('#numberOfKills').val();
    console.log('numberOfKills:',numberOfKills);
    $('#result').append(`
<h3>StarShip ${fName} specifics:</h3>
<ul>
    <li>Name of the pilot: <b>${fPilot}.</b></li>
    <li>Fuel Tank Capacity: <b>${fFuel}.</b></li>
    <li>Curent location of the starship: <b>${fLocation}.</b></li>
    <li>Types of weapons: <b>${weapons}.</b></li>
    <li>Type of starship: <b>Fighter Starship.</b></li>
    <li>Shield: <b>${shield}.</b></li>
    <li>Number of killed starships: <b>${numberOfKills}.</b></li>
</ul>

`)
    })

}
// Cargo
function fnCargo() {
    $('#starWars').html(`
    <label for="cargoCapacity">What is the cargo capacity?</label> <br>
    <input type="text" id="cargoCapacity"> <br>
    <label for="manifest">What is the manifest?</label> <br>
    <input type="text" id="manifest"> <br>
    <label for="loadingCranes">How many cranes are loaded?</label><br>
    <input type="text" id="loadingCranes"><br>
    <button id="submit-2">Submit</button>
`);
    $('#submit-2').on('click', () => {
        console.log('I just got the event from submit-1 button!');
        $('#result').html(`    
    <h2>This is your fighter StarShip!</h2> <br>
    <img src="img/cargo.jpg" alt="cargoShip" height="100%" width="100%"> <br>      
    `)
        let caName = $('#name').val();
        console.log('Cargo Name:', caName);
        let caPilot = $('#pilot').val();
        console.log('Cargo Pilot', caPilot);
        let caFuel = $('#fuel').val();
        console.log('Cargo Starship(Fuel)=>', caFuel);
        let caLocation = $('#location').val();
        console.log('Location of the ship: ', caLocation);
        let cargoCapacity = $('#cargoCapacity').val();
        console.log('cargoCapacity:', cargoCapacity);
        let manifest = $('#manifest').val();
        console.log('manifest:', manifest);
        let loadingCranes = $('#loadingCranes').val();
        console.log(loadingCranes);
        $('#result').append(`
    <h3>StarShip ${caName} specifics:</h3>
    <ul>
        <li>Name of the pilot: <b>${caPilot}.</b></li>
        <li>Fuel Tank Capacity: <b>${caFuel}.</b></li>
        <li>Curent location of the starship: <b>${caLocation}.</b></li>
        <li>Cargo Capacity: <b>${cargoCapacity}.</b></li>
        <li>Type of starship: <b>Cargo Starship.</b></li>
        <li>Manifest: <b>${manifest}.</b></li>
        <li>Loaded cranes: <b>${loadingCranes}.</b></li>
    </ul>
    
    `)
    })
}

// MiningShip
function fnMiningShip() {
    $('#starWars').html(`
    <label for="tools">What are the tools that you are going to use?</label> <br>
    <input type="text" id="tools"> <br>
    <label for="types">What types of treasures you want?</label> <br>
    <input type="text" id="types"> <br>
    <label for="storageCapacity">What is the storage capacity?</label><br>
    <input type="text" id="storageCapacity"><br>
    <button id="submit-3">Submit</button>
`);
    $('#submit-3').on('click', () => {
        console.log('I just got the event from submit-1 button!');
        $('#result').html(`    
    <h2>This is your mining StarShip!</h2> <br>
    <p></p> <br>
    <img src="img/mining.jpg" alt="minerShip" height="100%" width="100%"> <br>      
    `)
        let mnName = $('#name').val();
        console.log('Mining Name:', mnName);
        let mnPilot = $('#pilot').val();
        console.log('Mining Pilot', mnPilot);
        let mnFuel = $('#fuel').val();
        console.log('Mining Starship(Fuel)=>', mnFuel);
        let mnLocation = $('#location').val();
        console.log('Location of the ship: ', mnLocation);
        let mnTreasure = $('#types').val();
        console.log('Types of treasures i want:', mnTreasure);
        let mnStorage = $('#storageCapacity').val();
        console.log('Storage capacity:', mnStorage);
        let tools = $('#tools').val();
        console.log(tools);
        $('#result').append(`
    <h3>StarShip ${mnName} specifics:</h3>
    <ul>
        <li>Name of the pilot: <b>${mnPilot}.</b></li>
        <li>Fuel Tank Capacity: <b>${mnFuel}.</b></li>
        <li>Curent location of the starship: <b>${mnLocation}.</b></li>
        <li>Treasures looking for: <b>${mnTreasure}.</b></li>
        <li>Type of starship: <b>Mining Starship.</b></li>
        <li>Tools used for mining: <b>${tools}.</b></li>
        <li>Storage capacity: <b>${mnStorage}.</b></li>
    </ul>
    
    `)
    })
}

