"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = require("jquery");
let X = jquery_1.default("#pizarra").css("max-width");
let Y = jquery_1.default("#pizarra").css("max-height");
let HIJOS;
jquery_1.default(document).ready(function () {
    console.log("document loaded");
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            toggleFullScreen();
        }
    }, false);
    let Canva = get_Canvas("#pizarra");
    let Canva_Size = get_CanvasSize(Canva);
    let X = jquery_1.default("#pizarra").css("width");
    let Y = jquery_1.default("#pizarra").css("height");
    jquery_1.default("#iX").click(function () {
        let X2 = jquery_1.default("#pizarra").width();
        let Y2 = jquery_1.default("#pizarra").height();
        X2 = parseInt(X2, 10) - 1;
        Y2 = parseInt(Y2, 10) - 1;
        jquery_1.default("#pizarra").css("width", X2 + "px");
        jquery_1.default("#pizarra").css("height", Y2 + "px");
        console.log("X2 --  Y2 :", X2, Y2);
        jquery_1.default("#iX").val(X2);
    });
});
function rectangulo() {
    let OBJETO = {
        z: 100,
        name: "rectangulo",
        x: 100,
        y: 300,
        ancho: 200,
        alto: 200
    };
    HIJOS.push(OBJETO);
    let puntero = HIJOS.length - 1;
    console.log(HIJOS[puntero]);
    var html = `<div class=""
        id="${HIJOS[puntero].name}"
        style="top:${HIJOS[puntero].y + "px"};
        box-sizing: border-box;
        background-color: red;
        border: 10px solid blue;
        left:${HIJOS[puntero].x + "px"};
        width:${HIJOS[puntero].ancho + "px"};
        height:${HIJOS[puntero].alto + "px"};
        z-index:${HIJOS[puntero].z}">
    </div>`;
    jquery_1.default("#pizarra").prepend(html);
    console.log("HIJOS, OBJETO :", HIJOS, OBJETO);
}
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
function get_Canvas(id_Canva) {
    return jquery_1.default(id_Canva)[0].getContext("2d");
}
function get_CanvasSize(Canva) {
    return {
        height: Canva.canvas.height,
        width: Canva.canvas.width
    };
}
