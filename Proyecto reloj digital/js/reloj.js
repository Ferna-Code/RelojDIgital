const mostrarReloj = () =>{
    let fecha = new Date;
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    //obtenemos la fecha
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDay();
    let mes = meses[fecha.getMonth()];

    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
    //con classList podemos obtener todas las clases css y toggle funciona como un interruptor
}
const formatoHora = (hora) =>{//agregamos un 0 si algun dato es menor a 10
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj,1000);