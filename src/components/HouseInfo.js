import React from 'react';

const houseNames = {
    arryn: {
        name: "House of Arryn",
        logo: "img/arryn.png"
    },
    baratheon: {
        name: "House Baratheon of Drangonstone",
        logo: "img/baratheon.png"
    },
    lannister: {
        name: "House of Lannister",
        logo: "img/lannister.png"
    },
    stark: {
        name: "House of Stark",
        logo: "img/stark.png"
    },
    targaryen: {
        name: "House Targaryen",
        logo: "img/targaryen.png"
    },
    tyrell: {
        name: "House Tyrell",
        logo: "img/tyrell.png"
    },
}
const HouseInfo = ({currentHouseName}) => {
    const house = houseNames[currentHouseName]

    if (currentHouseName == '') {
        return (
            <>
            </>
        )
    } else if (house) {
        return (
            <div>
                <p>GO {house.name}!</p>
                <img src={house.logo} />
            </div>
        )
    } else {
        return (
            <div>{currentHouseName}? Never heard of it!</div>
        )
    }
}

export default HouseInfo
