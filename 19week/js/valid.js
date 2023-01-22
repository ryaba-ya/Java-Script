class Validation{
    isEmail(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)){
            return true
        }else{
            return false
        }
    }
    isPhone(phone){
        const rePhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(rePhone.test(phone)){
            return true
        }else{
            return false
        }
    }
    isDomain(domain){
        const reDomain = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        if(reDomain.test(domain)){
            return true
        }else{
            return false
        }
    }
    isDate(date){
        const reDate = /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/;
        if(reDate.test(date)){
            return true
        }else{
            return false
        }
    }
}

let validator = new Validation();
console.log(validator.isEmail('alisamail.ru'));
console.log(validator.isPhone('+7(910)123-45-67'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));



class ValidationStatic {
    static isEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            return true
        }else{
            return false
        }
        
    }
    static isDomain(domain) {
        const reD = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
        if(reD.test(domain)){
            return true
        }else{
            return false
        }
        
    }
    static isDate(date) {
        const reDate =  /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/;
        if(reDate.test(date)){
            return true
        }else{
            return false
        }
        
    }
    static isPhone(phone) {
        const rePhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(rePhone.test(phone)){
            return true
        }else{
            return false
        }
        
    }
}
console.log(ValidationStatic.isEmail('alisa@mail.ru'));
console.log(ValidationStatic.isDomain('itgirlschool.ru'));
console.log(ValidationStatic.isDate('12.05.2021'));
console.log(ValidationStatic.isPhone('+7(910)123-45-67'));


