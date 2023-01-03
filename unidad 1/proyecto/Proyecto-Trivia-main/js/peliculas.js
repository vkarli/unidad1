const preguntas = [
    {
        pregunta: "¿En que pelicula aparece Jack Nicholson?",
        respuesta: ["50 sombras de Geyt", "El resplandor", "Intensamente", "Silen Hill"],
        correcta: 1
    },

    {
        pregunta: "¿En que genero de cine se encuentra la pelicula V de vendetta?",
        respuesta: ["Triller psicologico", "Drama", "Ciencia Ficcion", "Romance"],
        correcta: 2
    },
    {
        pregunta: "¿Cuales eran los personajes principales del TITANIC?",
        respuesta: ["Jack Dawson y Rose Dewitt Bukater", "Noa Caulhon y Allie Hamilton", "Ryan Reynolds y Blake Lively", "Romeo Montesco y Julieta Capuleto"],
        correcta: 0
    },
];

var indice_aleatorio = 0;
var pregunta_txt = "";
var interval;

window.onload = iniciar();

function iniciar() {
    loadQuestions();
    if (localStorage.getItem("SCORE") != null) {
        localStorage.removeItem("SCORE");
    }
}

function inciarCronometro() {
    const contador = 15, cronometroDisplay = document.getElementById("cronometro")

    inciarTiempo(contador, cronometroDisplay)
}

function inciarTiempo(duracion, componente) {
    interval = setInterval(() => {
        if (duracion === 0) {

            componente.innerHTML = "Se acabo el tiempo";

            clearInterval(interval);

            loadQuestions()
        } else {

            duracion = duracion < 10 ? "0" + duracion : duracion;

            componente.textContent = "00:" + duracion;

            duracion--;
        }
    }, 1000)
}

function loadQuestions() {
    inciarCronometro()
    if (preguntas.length > 0) {

        indice_aleatorio = Math.floor(Math.random() * preguntas.length);

        pregunta_txt = "";

        pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';
        pregunta_txt += '<button id="opcion0" class="botonTrivia" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuesta[0] + '</button>';
        pregunta_txt += '<button id="opcion1" class="botontrivia" onclick="verificarrespuetacorrecta(1,' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuesta[1] + '</butoon>';
        pregunta_txt += '<button id="opcion2" class="botontrivia" onclick="verificarrespuetacorrecta(2,' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuesta[2] + '</butoon>';
        pregunta_txt += '<button id="opcion3" class="botontrivia" onclick="verificarrespuetacorrecta(3,' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuesta[3] + '</butoon>';

document.getElementById("preguntas").innerHTML= pregunta_txt
preguntas.splice(indice_aleatorio,1);


    } else{
        window.location.href="../vistas/resultado.html";
    }

}