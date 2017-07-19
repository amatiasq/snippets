function linkToCanvas(link, canvas, name) {
  var dataURL = canvas.toDataURL('image/jpeg');

  if (window.navigator.msSaveBlob) {
    // IE
    link.setAttribute('href', '#');
    link.addEventListener('click', () => {
      var ab = Base64Binary.decodeArrayBuffer(dataURL.substring(23));
      var blob = new Blob([ ab ], { type: 'image/jpg' });
      window.navigator.msSaveBlob(blob, name);
    }, true);
    
    return;
  }

  // Firefox and Chrome
  link.setAttribute('href', dataURL);
  link.setAttribute('download', name);
},
