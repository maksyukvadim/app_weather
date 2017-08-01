export function correctCoords(coord) {
    return coord - 0.02;
}

export function converKelvinToCels(temp) {
    if (temp === '') return '';
    return parseInt(temp - 273, 10);
}


export function getDate(date) {
    console.log(date);
    const d = new Date(date);
    let s = '';
    s += d.getDay() + ' ' + d.getMonth() + ' ' + d.getFullYear();
    console.log(d);
    return s;
}

export function groupDataByDay(list) {
    let enptArr = {};
    let data = list[0].dt_txt.split(' ')[0].replace(/-/g, 'd');

    list.forEach((item) => {
        if (item.dt_txt.split(' ')[0].replace(/-/g, 'd') !== data) {
            data = item.dt_txt.split(' ')[0].replace(/-/g, 'd');
        }

        if (enptArr[data]) {
            enptArr[data].push(item);
        } else {
            enptArr[data] = [];
            enptArr[data].push(item);
        }
    });
    return Object.values(enptArr);
}