function trocar(event) {
  event.preventDefault();
  var input = document.querySelector("#code");
  var texto = input.value;

  document.body.style.background = texto;

}


var dragMe = document.getElementById("drag_me"),
  /* o x inicial do drag*/
  dragOfX = 0,
  /* o y inicial do drag */
  dragOfY = 0;

/* ao segurar o elemento */
function dragStart(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;
    
    /* adiciona os eventos */
    addEventListener("mousemove", dragMove);
    addEventListener("mouseup", dragEnd);
}
    
/* ao ser arrastado */
function dragMove(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY) + 'px';
}
    
/* ao terminar o drag */
function dragEnd() {
    /* remove os eventos */
    removeEventListener("mousemove", dragMove);
    removeEventListener("mouseup", dragEnd);
}
    
/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart);



