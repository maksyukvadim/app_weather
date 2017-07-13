export function correctCoords(coord) {
    return coord - 0.02;
}

export function converKelvinToCels(temp) {
    if(temp === '') return '';
    return parseInt(temp - 273, 10);
}


export function getDate (date) {
    console.log(date);
    const d = new Date(date);
    let s = '';
    s+=d.getDay() + ' ' + d.getMonth() + ' ' + d.getFullYear();
    console.log(d);
        return s;
}