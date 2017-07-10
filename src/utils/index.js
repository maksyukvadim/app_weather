export function correctCoords(coord) {
    return coord - 0.02;
}

export function converKelvinToCels(temp) {
    if(temp === '') return '';
    return parseInt(temp - 273, 10);
}