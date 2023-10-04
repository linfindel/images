const imageElement = document.getElementById("image");

const buttons = document.getElementById("buttons");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const button1Icon = document.getElementById("button1-icon");
const button1Text = document.getElementById("button1-text");
const button2Icon = document.getElementById("button2-icon");
const button2Text = document.getElementById("button2-text");

function resetImage() {
    location.reload();
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

    imageOptions();
}

function uploadFile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = () => {
        let file = input.files[0]; // Get the first selected file
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let fileURL = e.target.result;
                imageElement.src = fileURL;
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };
    input.click();

    imageOptions();
}