class Validator {
    isEmail(email) {
        const emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.[a-z]{2,4}$/i;
        if (emailRegexp.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    isDomain(domain) {
        const domainRegexp = /\w+\.+\w+/i;
        if (domainRegexp.test(domain)) {
            return true;
        }
        else {
            return false;
        }
    }

    isDate(date) {
        const dateRegexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (dateRegexp.test(date)) {
            return true;
        }
        else {
            return false;
        }
    }

    isPhone(phone) {
        const phoneRegexp = /^\+([- _():=+]?\d[- _():=+]?){10,14}$/;
        if (phoneRegexp.test(phone)) {
            return true;
        }
        else {
            return false;
        }
    }
}

let validator = new Validator();

//вызов стандартных методов
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

class ValidatorStatic {
    static isEmail(email) {
        const emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.[a-z]{2,4}$/i;
        if (emailRegexp.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isDomain(domain) {
        const domainRegexp = /\w+\.+\w+/i;
        if (domainRegexp.test(domain)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isDate(date) {
        const dateRegexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (dateRegexp.test(date)) {
            return true;
        }
        else {
            return false;
        }
    }

    static isPhone(phone) {
        const phoneRegexp = /^\+([- _():=+]?\d[- _():=+]?){10,14}$/;
        if (phoneRegexp.test(phone)) {
            return true;
        }
        else {
            return false;
        }
    }
}

//вызов статических методов
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));
