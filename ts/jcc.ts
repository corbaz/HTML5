import $ from "jquery";

let X = $("#pizarra").css("max-width");
let Y = $("#pizarra").css("max-height");

interface IHijos {
  z: number;
  name: string;
  x: number;
  y: number;
  ancho: number;
  alto: number;
}
let HIJOS: IHijos[];

$(document).ready(function() {
  console.log("document loaded");
  document.addEventListener(
    "keydown",
    function(e) {
      if (e.keyCode == 13) {
        toggleFullScreen();
      }
    },
    false
  );
  let Canva = get_Canvas("#pizarra");
  let Canva_Size = get_CanvasSize(Canva);
  let X = $("#pizarra").css("width");
  let Y = $("#pizarra").css("height");

  $("#iX").click(function() {
    let X2: any = $("#pizarra").width();
    let Y2: any = $("#pizarra").height();

    X2 = parseInt(X2, 10) - 1;
    Y2 = parseInt(Y2, 10) - 1;
    $("#pizarra").css("width", X2 + "px");
    $("#pizarra").css("height", Y2 + "px");
    console.log("X2 --  Y2 :", X2, Y2);
    //$("#pizarra").height(Y2);
    // $("#pizarra").css("max-width", X);
    // $("#pizarra").css("min-width", X);
    // $("#pizarra").css("max-height", Y);
    // $("#pizarra").css("min-height", Y);

    $("#iX").val(X2);
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
  $("#pizarra").prepend(html);
  console.log("HIJOS, OBJETO :", HIJOS, OBJETO);
}
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
//get the context of the can
function get_Canvas(id_Canva) {
  return $(id_Canva)[0].getContext("2d");
}

// get canvas size
function get_CanvasSize(Canva) {
  return {
    height: Canva.canvas.height,
    width: Canva.canvas.width
  };
}
