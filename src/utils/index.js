export function correctCoords(coord) {
    return coord - 0.02;
}

export function converKelvinToCels(temp) {
    if (temp === '') return '';
    return parseInt(temp - 273, 10);
}


export function getDate(date) {
    const d = new Date(date);
    let s = '';
    s += d.getDay() + ' ' + d.getMonth() + ' ' + d.getFullYear();
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
    return enptArr;
}

export function getDay(date) {
    return (new Date(date)).getDay();
}

export function splitDash(data, ind) {
    return data.split('-')[ind];
}

export function getDefaultLang(listLang) {
    const browsLang = navigator.language.toLowerCase();
    const lang = listLang.find(item => browsLang === item);
    return lang ? lang : 'ru';
}