var divElement = document.getElementById('viz1687709115691');
var vizElement = divElement.getElementsByTagName('object')[0];

if (divElement.offsetWidth > 800) {
  vizElement.style.width = '100%';
  vizElement.style.height = '100%';
} else if (divElement.offsetWidth > 500) {
  vizElement.style.width = '100%';
  vizElement.style.height = '100%';
} else {
  vizElement.style.width = '1375px';
  vizElement.style.height = '900px';
}

var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);