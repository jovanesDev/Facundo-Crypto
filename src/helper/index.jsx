export const checkfilledIsEmpty = ( field ) =>{
    // if(password === ''){
    //     return false;
    // }else {
    //     return true;
    // }
    return field ===  '';
}

export const checkArr = (arr) =>{

    let haycamposVacios = false;

    arr.map(( field ) => checkfilledIsEmpty(field) ? haycamposVacios = true : null)

    return haycamposVacios;
}

export const userName = (field) => {
    const fieldArr = field ? field.split(' ') : [];

    return {
        name: fieldArr[0] || '',
        lastName : fieldArr[1] || ''
    }
}

export const existUser = (user, key) => {
    return user ? user[key] : '';
}

export const retornarValor = (e) => {
    let valorCripto = JSON.parse(e.data);
    let valorCriptoDec = parseFloat(valorCripto.p).toFixed(2);
    return valorCriptoDec;
}

export const savedSessionStorage = (arr) => {
    arr.map((elemento) => {
        elemento.value && JSON.stringify(sessionStorage.setItem(elemento.key, elemento.value))
    });
}


export const highLow = ( valor ) => {

        // if(valor > 0){
        //     return 'text-success'
        // } else if (valor === 0){
        //     return 'text-dark'
        // }else {
        //     return 'text-danger'
        // }
        if(!valor){
            return '';
        } else if(valor.price_change_percentage_1h_in_currency > 0){
            return 'text-success'
        } else if(valor.price_change_percentage_1h_in_currency === 0){
            return 'text-dark'
        }else {
            return 'text-danger'
        }

}

export const precioPorcentaje = (porcentaje) => {
    return parseFloat(porcentaje).toFixed(2);
}

export const currentPrice = (coin, arr) =>{
    return arr.find(e => e.key === coin).value.current_price;
}
export const currentBalance = (coin, arr) =>{
    return arr.find(e => e.key === coin).value;
}

export const suma = (cantidad, precio) => {
    return cantidad * precio;
}