export default function spaceAge(planet, seconds) {
   let time; 
    switch (planet) {
        case 'Earth':
        time = seconds/31557600;
        break
        case 'Mercury':
        time = seconds/(31557600*0.2408467);
        break
        case 'Venus':
        time = seconds/(31557600*0.61519726);
        break
        case 'Mars':
        time = seconds/(31557600*1.8808158);
        break
        case 'Jupiter':
        time = seconds/(31557600*11.862615);
        break
        case 'Saturn':
        time = seconds/(31557600*29.447498);
        break
        case 'Uranus':
        time = seconds/(31557600*84.016846);
        break
        case 'Neptune':
        time = seconds/(31557600*164.79132);
        break;
    }
return parseFloat(time.toFixed(2)) 

}
