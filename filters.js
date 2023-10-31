const queryString = window.location.search;
console.log(queryString);
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
        console.log("Material Design Palette:", palette);

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
    }
})

// Function to generate a Material Design color palette from an image URL
function generateMaterialDesignPalette(imageURL, callback) {
    // Create an image element to load the image
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Enable cross-origin access to the image
  
    // Set up an event listener for when the image is loaded
    img.onload = function () {
        // Create a Vibrant.js object to extract colors from the image
        const vibrant = new Vibrant(img);
        const swatches = vibrant.swatches();

        // Check if swatches were successfully generated
        if (swatches) {
            // Extract Material Design color palette
            const palette = {
                accent: swatches.Vibrant.getHex(),
                primaryDark: swatches.DarkVibrant.getHex(),
                primaryLight: swatches.LightVibrant.getHex(),
                primary: swatches.Muted.getHex(),
            };

            localStorage.setItem("accent", palette.accent);
  
            // Execute the callback function with the generated palette
            callback(null, palette);
        }
        
        else {
            // Error handling if swatches couldn't be generated
            callback("Failed to generate swatches", null);
        }
    };
  
    // Set the image source to the provided URL
    img.src = imageURL;
}

// Function to generate an RGBA value with a specified alpha
function generateRGBA(hex, alpha) {
    // Remove the "#" symbol if present
    hex = hex.replace(/^#/, '');

    // Parse the hex color to RGB components
    const bigint = parseInt(hex, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;

    // Create the RGBA string
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
    
    canvas.width = img.width;
    canvas.height = img.height;
    
    ctx.filter = window.getComputedStyle(img).getPropertyValue("filter");
    
    const imgElement = new Image();
    imgElement.src = img.src;
    imgElement.crossOrigin = "anonymous";
    imgElement.onload = function() {
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
        

        const dataURI = canvas.toDataURL("image/jpeg");
        console.log(dataURI);

        document.getElementById("export").onclick = function() {
            copyImageURI(dataURI);
        }

        copyImageURI(dataURI);
    };
}

function copyImageURI(uri) {
    navigator.clipboard.writeText(uri);

    document.getElementById("export-text").innerText = "Copied link to filtered image";
    document.getElementById("export-icon").innerText = "check";

    setTimeout(() => {
        document.getElementById("export-text").innerText = "Copy link to filtered image";
        document.getElementById("export-icon").innerText = "content_copy";
    }, 1000);
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