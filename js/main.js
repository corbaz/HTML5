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

  $("#arrastrar1").draggable();
  $("#arrastrar2").draggable();
  // Damos la capacidad al div de recibir a otros elementos, admitiendo sólo a la imagen
  // cuyo 'id' es 'arrastrar2', y con la condición de que sea soltada estando completamente dentro
  $("#divDestino").droppable({
    accept: "#arrastrar2",
    tolerance: "fit",
    drop: elementoSoltado
  });
});

$(window).on("load", function() {
  console.log("window loaded");
});

function elementoSoltado(event, ui) {
  var id = ui.draggable.attr("id");
  $("#log").text("La imagen con id [" + id + "] ha sido soltada y aceptada");
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

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
