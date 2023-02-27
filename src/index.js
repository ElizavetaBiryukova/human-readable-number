function simple(n) {
    switch (n) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
        case 20:
            return 'twenty';
        default:
            return '';
    }
}

function desimal(n) {
    switch (n) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
        default:
            return '';
    }
}

module.exports = function toReadable(number) {
    let read = '';
    if (number > 99) {
        read = `${simple(Math.floor(number/100))} hundred`;
    }
    if (number > 100 && (number % 100)) {
        read = `${read} `;

    } else {
        read;
    }


    if ((number % 100) <= 20) {
        read = `${read}${simple(number % 100)}`;
    } else if ((number % 100) > 20) {
        read = `${read}${desimal(Math.floor(number % 100 / 10))}`;
        if (number % 10) {
            read = `${read} ${simple(number % 10)}`;
        }
    }

    
    if (number === 0) {
        return 'zero';
    }
    return read;
}
