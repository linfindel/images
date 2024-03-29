const imageElement = document.getElementById("image");
const navbar = document.getElementById("navbar");

const buttons = document.getElementById("buttons");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const button1Icon = document.getElementById("button1-icon");
const button1Text = document.getElementById("button1-text");
const button2Icon = document.getElementById("button2-icon");
const button2Text = document.getElementById("button2-text");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlParam = urlParams.get('url');

if (urlParam) {
  imageElement.src = urlParam;
  document.getElementById("button3").style.display = "flex";
  document.getElementById("filters").href = `filters.html?url=${urlParam}`;

  generateMaterialDesignPalette(urlParam, (error, palette) => {
    if (error) {
      console.error(error);
    }
    
    else {    
      button1.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      button2.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      button3.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      button4.style.backgroundColor = generateRGBA(palette.accent, 0.25);

      button1.addEventListener("mouseover", () => {
        button1.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button1.addEventListener("mouseout", () => {
        button1.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      button2.addEventListener("mouseover", () => {
        button2.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button2.addEventListener("mouseout", () => {
        button2.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      button3.addEventListener("mouseover", () => {
        button3.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button3.addEventListener("mouseout", () => {
        button3.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      button4.addEventListener("mouseover", () => {
        button4.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button4.addEventListener("mouseout", () => {
        button4.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });
    
      document.getElementById("navbar").style.backgroundColor = generateRGBA(palette.accent, 0.25);
            
    }
  });
}

function resetImage() {
  location.href = "index.html";
}

function imageOptions(action) {
  if (action == "show") {
    buttons.style.opacity = 0;
    buttons.style.pointerEvents = "none";

    setTimeout(() => {
      button1.onclick = function() {
        uploadLink();
      }

      button2.onclick = function() {
        uploadFile();
      }

      button1Icon.innerText = "link";
      button1Text.innerText = "Open from link";

      button2Icon.innerText = "folder_open";
      button2Text.innerText = "Open from device";

      buttons.style.opacity = 1;
      buttons.style.pointerEvents = "all";
    }, 500);
  }

  else {
    buttons.style.opacity = 0;
    buttons.style.pointerEvents = "none";

    setTimeout(() => {
      button1.onclick = function() {
        imageOptions("show");
      }

      button2.onclick = function() {
        resetImage();
      }

      button1Icon.innerText = "upload";
      button1Text.innerText = "Upload image";

      button2Icon.innerText = "reset_image";
      button2Text.innerText = "Reset image";

      buttons.style.opacity = 1;
      buttons.style.pointerEvents = "all";
    }, 500);
  }
}

function uploadLink() {
  var url = prompt("URL for upload");

  imageElement.src = url;

  generateMaterialDesignPalette(url, (error, palette) => {
    if (error) {
      console.error(error);
    }
    
    else {
      button1.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      button2.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      button3.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      button4.style.backgroundColor = generateRGBA(palette.accent, 0.25);

      button1.addEventListener("mouseover", () => {
        button1.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button1.addEventListener("mouseout", () => {
        button1.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      button2.addEventListener("mouseover", () => {
        button2.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button2.addEventListener("mouseout", () => {
        button2.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      button3.addEventListener("mouseover", () => {
        button3.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button3.addEventListener("mouseout", () => {
        button3.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      button4.addEventListener("mouseover", () => {
        button4.style.backgroundColor = generateRGBA(palette.accent, 0.5);
      });
      button4.addEventListener("mouseout", () => {
        button4.style.backgroundColor = generateRGBA(palette.accent, 0.25);
      });

      document.getElementById("navbar").style.backgroundColor = generateRGBA(palette.accent, 0.25);
            
    }
  });

  imageOptions();

  document.getElementById("button3").style.display = "flex";
  document.getElementById("filters").href = `filters.html?url=${url}`;
}

function uploadFile() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = () => {
    let file = input.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
        let fileURL = e.target.result;
        imageElement.src = fileURL;

        generateMaterialDesignPalette(fileURL, (error, palette) => {
          if (error) {
            console.error(error);
          }
          
          else {
            button1.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            button2.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            button3.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            button4.style.backgroundColor = generateRGBA(palette.accent, 0.25);

            button1.addEventListener("mouseover", () => {
              button1.style.backgroundColor = generateRGBA(palette.accent, 0.5);
            });
            button1.addEventListener("mouseout", () => {
              button1.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            });

            button2.addEventListener("mouseover", () => {
              button2.style.backgroundColor = generateRGBA(palette.accent, 0.5);
            });
            button2.addEventListener("mouseout", () => {
              button2.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            });

            button3.addEventListener("mouseover", () => {
              button3.style.backgroundColor = generateRGBA(palette.accent, 0.5);
            });
            button3.addEventListener("mouseout", () => {
              button3.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            });

            button4.addEventListener("mouseover", () => {
              button4.style.backgroundColor = generateRGBA(palette.accent, 0.5);
            });
            button4.addEventListener("mouseout", () => {
              button4.style.backgroundColor = generateRGBA(palette.accent, 0.25);
            });

            document.getElementById("navbar").style.backgroundColor = generateRGBA(palette.accent, 0.25);      
          }

          document.getElementById("filters").href = "";
        });
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();

  imageOptions();
}

function generateMaterialDesignPalette(imageURL, callback) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  
  img.onload = function () {
    const vibrant = new Vibrant(img);
    const swatches = vibrant.swatches();

    if (swatches) {
      const palette = {
        accent: swatches.Vibrant.getHex(),
        primaryDark: swatches.DarkVibrant.getHex(),
        primaryLight: swatches.LightVibrant.getHex(),
        primary: swatches.Muted.getHex(),
      };
  
      callback(null, palette);
    }
        
    else {
      callback("Failed to generate swatches", null);
    }
  };
  
  img.src = imageURL;
}

function generateRGBA(hex, alpha) {
  hex = hex.replace(/^#/, '');

  const bigint = parseInt(hex, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}