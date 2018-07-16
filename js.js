var dott1 = 0;
var dott2 = 0;
var dott3 = 0;
var dott4 = 0;
var z1 = 0;
var z2 = 0;
var el = document.getElementById('photo');
el.addEventListener('click', go1, false);
function go1(event) {
    var elem = document.getElementById('show');
        elem.style.position = 'absolute';
        elem.style.left = (event.layerX == undefined ? event.offsetX : event.layerX) + 'px';
        elem.style.top = (event.layerY == undefined ? event.offsetY : event.layerY) + 'px';
        elem.style.display = 'block';
        dott1 = elem.offsetLeft + elem.offsetTop;
    this.removeEventListener('click', go1);
    el.addEventListener('click', go2, false);
};
function go2(event) {
    var elem = document.getElementById('show1');
        elem.style.position = 'absolute';
        elem.style.left = (event.layerX == undefined ? event.offsetX : event.layerX) + 'px';
        elem.style.top = (event.layerY == undefined ? event.offsetY : event.layerY) + 'px';
        elem.style.display = 'block';
        dott2 = elem.offsetLeft + elem.offsetTop;
        z1 = dott2 - dott1;
    this.removeEventListener('click', go2);
    el.addEventListener('click', go3, false);
};
function go3(event) {
    var elem = document.getElementById('show3');
        elem.style.position = 'absolute';
        elem.style.left = (event.layerX == undefined ? event.offsetX : event.layerX) + 'px';
        elem.style.top = (event.layerY == undefined ? event.offsetY : event.layerY) + 'px';
        elem.style.display = 'block';
        dott3 = elem.offsetLeft + elem.offsetTop;
    this.removeEventListener('click', go3);
    el.addEventListener('click', go4, false);
};
function go4(event) {
    var elem = document.getElementById('show4');
        elem.style.position = 'absolute';
        elem.style.left = (event.layerX == undefined ? event.offsetX : event.layerX) + 'px';
        elem.style.top = (event.layerY == undefined ? event.offsetY : event.layerY) + 'px';
        elem.style.display = 'block';
        dott4 = elem.offsetLeft + elem.offsetTop;
        z2 = dott4 - dott3;
        var x1 = document.getElementById('x1');
        x1.style.display = 'block';
        x1.innerHTML ='Ваш индекс красоты составляет: ' + 
        Math.abs((z2 / z1) - 1.618).toFixed(2);
    this.removeEventListener('click', go4);
};




