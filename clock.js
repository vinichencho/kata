
const tiempoDigital = (clock) => {
    let singleMin = clock.substr(20,24)
    let min_5 = clock.substr(0,20).substr(9,20);
    let singleH = clock.substr(0,9).substr(5,9)
    let hou_5 = clock.substr(0,5).substr(1,5);
    let sec = clock.substr(0,1);

    const horaDig = (hou_5,singleH) => {

        let hora = 0;
        let hora5 = (hou_5.split("R").length -1) * 5;
        let hora1 = singleH.split("R").length - 1;
        hora = hora5 + hora1;
        return hora;
    }
    const minDig = (min_5,singleMin) => {
        let minutos = 0;
        let min1 = singleMin.split("Y").length - 1;
        let min5 = (min_5.length - (min_5.split("O").length -1 )) * 5
        minutos = min1 + min5;
        return minutos;
    }

    const secDig = (sec) => {
        let numero = "00";
        if(sec == "Y") numero = "00"
        else numero = "01"
        return  numero;
    }

    console.log(horaDig(hou_5,singleH),':',minDig(min_5,singleMin),':',secDig(sec))

    
}


tiempoDigital("ORROOROOOYYRYYRYOOOOYYOO")