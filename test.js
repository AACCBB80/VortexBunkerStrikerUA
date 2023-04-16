(function(ext) {
  // Define a new block with two input fields
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  ext._shutdown = function() {};

  ext.downloadTextAsFile = function(text, extension) {
    // Create a new blob with the text and specified file extension
    var blob = new Blob([text], {type: 'text/plain'});
    var url = URL.createObjectURL(blob);

    // Create a new anchor element with the download attribute set to the specified filename
    var a = document.createElement('a');
    a.download = 'download.' + extension;
    a.href = url;
    a.click();
  };

  // Define the new block's descriptor
  var descriptor = {
    blocks: [
      [' ', 'Download %s as file with extension %s', 'downloadTextAsFile', '', '']
    ]
  };

  // Register the extension
  ScratchExtensions.register('Text Download', descriptor, ext);
})({});
