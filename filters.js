const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get('url');

const img = document.getElementById("img");

img.src = url;
document.getElementById("back-link").href = `index.html?url=${url}`;

var filters;

generateMaterialDesignPalette(url, (error, palette) => {
  if (error) {
    console.error(error);
  }

  else {
    document.getElementById("navbar").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("back").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("export").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("filters").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("blur").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("brightness").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("contrast").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("grayscale").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("hue-rotate").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("invert").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("opacity").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("saturate").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    document.getElementById("sepia").style.backgroundColor = generateRGBA(palette.accent, 0.25);

    document.getElementById("back").addEventListener("mouseover", () => {
      document.getElementById("back").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("back").addEventListener("mouseout", () => {
      document.getElementById("back").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("export").addEventListener("mouseover", () => {
      document.getElementById("export").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("export").addEventListener("mouseout", () => {
      document.getElementById("export").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("blur").addEventListener("focusin", () => {
      document.getElementById("blur").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("blur").addEventListener("focusout", () => {
      document.getElementById("blur").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("brightness").addEventListener("focusin", () => {
      document.getElementById("brightness").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("brightness").addEventListener("focusout", () => {
      document.getElementById("brightness").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("contrast").addEventListener("focusin", () => {
      document.getElementById("contrast").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("contrast").addEventListener("focusout", () => {
      document.getElementById("contrast").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("grayscale").addEventListener("focusin", () => {
      document.getElementById("grayscale").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("grayscale").addEventListener("focusout", () => {
      document.getElementById("grayscale").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("hue-rotate").addEventListener("focusin", () => {
      document.getElementById("hue-rotate").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("hue-rotate").addEventListener("focusout", () => {
      document.getElementById("hue-rotate").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("invert").addEventListener("focusin", () => {
      document.getElementById("invert").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("invert").addEventListener("focusout", () => {
      document.getElementById("invert").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("opacity").addEventListener("focusin", () => {
      document.getElementById("opacity").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("opacity").addEventListener("focusout", () => {
      document.getElementById("opacity").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("saturate").addEventListener("focusin", () => {
      document.getElementById("saturate").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("saturate").addEventListener("focusout", () => {
      document.getElementById("saturate").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    document.getElementById("sepia").addEventListener("focusin", () => {
      document.getElementById("sepia").style.backgroundColor = generateRGBA(palette.accent, 0.5);
    })

    document.getElementById("sepia").addEventListener("focusout", () => {
      document.getElementById("sepia").style.backgroundColor = generateRGBA(palette.accent, 0.25);
    })

    if (calculateContrastRatio([120, 120, 120], `${palette.accent}40`) < 3.5) {
      var placeholderStyles = document.createElement("style");
      placeholderStyles.innerHTML = `
        ::placeholder {
          color: rgb(200, 200, 200);
        }
      `;

      document.body.appendChild(placeholderStyles);
    }
  }
})

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

      localStorage.setItem("accent", palette.accent);
  
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

function addFilter(filter) {
  if (filter == "blur") {
    if (document.getElementById("blur-input").value == "") {
      img.style.filter = img.style.filter.replace(/blur\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("blur")) {
      img.style.filter += `blur(${document.getElementById("blur-input").value}px)`;
    }

    else {
      img.style.filter = img.style.filter.replace(/blur\([^)]*\)/, '');
      img.style.filter += `blur(${document.getElementById("blur-input").value}px)`;
    }
  }

  else if (filter == "brightness") {
    if (document.getElementById("brightness-input").value == "") {
      img.style.filter = img.style.filter.replace(/brightness\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("brightness")) {
      img.style.filter += `brightness(${document.getElementById("brightness-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/brightness\([^)]*\)/, '');
      img.style.filter += `brightness(${document.getElementById("brightness-input").value / 100})`;
    }
  }

  else if (filter == "contrast") {
    if (document.getElementById("contrast-input").value == "") {
      img.style.filter = img.style.filter.replace(/contrast\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("contrast")) {
      img.style.filter += `contrast(${document.getElementById("contrast-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/contrast\([^)]*\)/, '');
      img.style.filter += `contrast(${document.getElementById("contrast-input").value / 100})`;
    }
  }

  else if (filter == "grayscale") {
    if (document.getElementById("grayscale-input").value == "") {
      img.style.filter = img.style.filter.replace(/grayscale\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("grayscale")) {
      img.style.filter += `grayscale(${document.getElementById("grayscale-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/grayscale\([^)]*\)/, '');
      img.style.filter += `grayscale(${document.getElementById("grayscale-input").value / 100})`;
    }
  }

  else if (filter == "hue-rotate") {
    if (document.getElementById("hue-rotate-input").value == "") {
      img.style.filter = img.style.filter.replace(/hue-rotate\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("hue-rotate")) {
      img.style.filter += `hue-rotate(${document.getElementById("hue-rotate-input").value}deg)`;
    }

    else {
      img.style.filter = img.style.filter.replace(/hue-rotate\([^)]*\)/, '');
      img.style.filter += `hue-rotate(${document.getElementById("hue-rotate-input").value}deg)`;
    }
  }

  else if (filter == "invert") {
    if (document.getElementById("invert-input").value == "") {
      img.style.filter = img.style.filter.replace(/invert\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("invert")) {
      img.style.filter += `invert(${document.getElementById("invert-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/invert\([^)]*\)/, '');
      img.style.filter += `invert(${document.getElementById("invert-input").value / 100})`;
    }
  }

  else if (filter == "opacity") {
    if (document.getElementById("opacity-input").value == "") {
      img.style.filter = img.style.filter.replace(/opacity\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("opacity")) {
      img.style.filter += `opacity(${document.getElementById("opacity-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/opacity\([^)]*\)/, '');
      img.style.filter += `opacity(${document.getElementById("opacity-input").value / 100})`;
    }
  }

  else if (filter == "saturate") {
    if (document.getElementById("saturate-input").value == "") {
      img.style.filter = img.style.filter.replace(/saturate\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("saturate")) {
      img.style.filter += `saturate(${document.getElementById("saturate-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/saturate\([^)]*\)/, '');
      img.style.filter += `saturate(${document.getElementById("saturate-input").value / 100})`;
    }
  }

  else if (filter == "sepia") {
    if (document.getElementById("sepia-input").value == "") {
      img.style.filter = img.style.filter.replace(/sepia\([^)]*\)/, '');
      return;
    }

    if (!img.style.filter.includes("sepia")) {
      img.style.filter += `sepia(${document.getElementById("sepia-input").value / 100})`;
    }

    else {
      img.style.filter = img.style.filter.replace(/sepia\([^)]*\)/, '');
      img.style.filter += `sepia(${document.getElementById("sepia-input").value / 100})`;
    }
  }

  document.getElementById("original-button").removeAttribute("inert");
  document.getElementById("original-button").removeAttribute("class");

  document.getElementById("original-button").style.backgroundColor = generateRGBA(localStorage.getItem("accent"), 0.25);

  document.getElementById("original-button").addEventListener("mouseover", () => {
    document.getElementById("original-button").style.backgroundColor = generateRGBA(localStorage.getItem("accent"), 0.5);
  })

  document.getElementById("original-button").addEventListener("mouseout", () => {
    document.getElementById("original-button").style.backgroundColor = generateRGBA(localStorage.getItem("accent"), 0.25);
  })

  filters = img.style.filter;
  document.getElementById("original-text").innerText = "Show original image";
}

function exportImage() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  img.style.transition = "0s";
  img.style.maxWidth = "";
  img.style.maxHeight = "";
    
  canvas.width = img.width;
  canvas.height = img.height;
    
  ctx.filter = window.getComputedStyle(img).getPropertyValue("filter");
    
  const imgElement = new Image();
  imgElement.src = img.src;
  imgElement.crossOrigin = "anonymous";
  imgElement.onload = function() {
    ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

    const dataURI = canvas.toDataURL("image/jpeg");

    img.style.transition = "0.25s ease";
    img.style.maxWidth = "60vw";
    img.style.maxHeight = "60vh";

    downloadURI(dataURI, url);

    console.log(url);
  };
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

function compare() {
  if (img.style.filter == "") {
    img.style.filter = filters;

    document.getElementById("original-text").innerText = "Show original image";
  }

  else {
    img.style.filter = "";

    document.getElementById("original-text").innerText = "Show filtered image";
  }
}

function calculateContrastRatio(foreground, background) {
  const fgRgb = foreground;
  const bgRgb = hexToRgb(background);

  const fgLuminance = getRelativeLuminance(fgRgb);

  const bgLuminance = getRelativeLuminance(bgRgb);

  var contrastRatio = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);

  return contrastRatio;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function getRelativeLuminance(rgb) {
  const [r, g, b] = rgb.map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}