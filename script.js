const images = [
    { author: "nhdang", src: "img/nhdang/1.jpg" },
    { author: "nhdai", src: "img/nhdai/1.jpg" },
    { author: "nhdai", src: "img/nhdai/2.jpg" },
    { author: "nhdai", src: "img/nhdai/3.jpg" },
    { author: "nhdai", src: "img/nhdai/4.jpg" },
    { author: "nhdai", src: "img/nhdai/5.jpg" },
];

let current = 0;

const photo = document.getElementById("photo");
const author = document.getElementById("author");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    photo.src = images[current].src;
    author.textContent = images[current].author;
}

prevBtn.onclick = () => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
};

nextBtn.onclick = () => {
    current = (current + 1) % images.length;
    updateImage();
};

const saveBtn = document.getElementById("saveBtn");

saveBtn.onclick = () => {
    const item = images[current];
    const author = item.author;

    const fileName = item.src.split("/").pop();   
    const base = fileName.replace(/\.[^/.]+$/, ""); 

    const newName = `${author}_${base}.jpg`;

    const link = document.createElement("a");
    link.href = item.src;
    link.download = newName;
    link.click();
};


updateImage();
