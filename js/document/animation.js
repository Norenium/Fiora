function moveIn(id,outPosition) {
      var loader = document.getElementById("loader"); 
      var pos = 600;
      var id = setInterval(frame, 5);
      function frame() {
          if (pos == 0) {
              clearInterval(id);
          } else {
              pos--; 
              loader.style.top = pos + 'px'; 
  
          }
      }
  }