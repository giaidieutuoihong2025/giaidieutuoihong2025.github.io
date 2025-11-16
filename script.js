const images = [
{ author: "nhdai", src: "img/nhdai/1.jpg" },
{ author: "nhdai", src: "img/nhdai/2.jpg" },
{ author: "nhdai", src: "img/nhdai/3.jpg" },
{ author: "nhdai", src: "img/nhdai/4.jpg" },
{ author: "nhdai", src: "img/nhdai/5.jpg" },
{ author: "nhdai", src: "img/nhdai/6.jpg" },
{ author: "nhdai", src: "img/nhdai/7.jpg" },
{ author: "nhdai", src: "img/nhdai/8.jpg" },
{ author: "nhdai", src: "img/nhdai/9.jpg" },
{ author: "nhdai", src: "img/nhdai/10.jpg" },
{ author: "nhdai", src: "img/nhdai/11.jpg" },
{ author: "nhdai", src: "img/nhdai/12.jpg" },
{ author: "nhdai", src: "img/nhdai/13.jpg" },
{ author: "nhdai", src: "img/nhdai/14.jpg" },
{ author: "nhdai", src: "img/nhdai/15.jpg" },
{ author: "nhdai", src: "img/nhdai/16.jpg" },
{ author: "nhdai", src: "img/nhdai/17.jpg" },
{ author: "nhdai", src: "img/nhdai/18.jpg" },
{ author: "nhdai", src: "img/nhdai/19.jpg" },
{ author: "nhdai", src: "img/nhdai/20.jpg" },
{ author: "nhdai", src: "img/nhdai/21.jpg" },
{ author: "nhdai", src: "img/nhdai/22.jpg" },
{ author: "nhdai", src: "img/nhdai/23.jpg" },
{ author: "nhdai", src: "img/nhdai/24.jpg" },
{ author: "nhdai", src: "img/nhdai/25.jpg" },
{ author: "nhdai", src: "img/nhdai/26.jpg" },
{ author: "nhdai", src: "img/nhdai/27.jpg" },
{ author: "nhdai", src: "img/nhdai/28.jpg" },
{ author: "nhdai", src: "img/nhdai/29.jpg" },
{ author: "nhdai", src: "img/nhdai/30.jpg" },
{ author: "nhdai", src: "img/nhdai/31.jpg" },
{ author: "nhdai", src: "img/nhdai/32.jpg" },
{ author: "nhdai", src: "img/nhdai/33.jpg" },
{ author: "nhdai", src: "img/nhdai/34.jpg" },
{ author: "nhdai", src: "img/nhdai/35.jpg" },
{ author: "nhdai", src: "img/nhdai/36.jpg" },
{ author: "nhdai", src: "img/nhdai/37.jpg" },
{ author: "nhdai", src: "img/nhdai/38.jpg" },
{ author: "nhdai", src: "img/nhdai/39.jpg" },
{ author: "nhdai", src: "img/nhdai/40.jpg" },
{ author: "nhdai", src: "img/nhdai/41.jpg" },
{ author: "nhdai", src: "img/nhdai/42.jpg" },
{ author: "nhdai", src: "img/nhdai/43.jpg" },
{ author: "nhdai", src: "img/nhdai/44.jpg" },
{ author: "nhdai", src: "img/nhdai/45.jpg" },
{ author: "nhdai", src: "img/nhdai/46.jpg" },
{ author: "nhdai", src: "img/nhdai/47.jpg" },
{ author: "nhdai", src: "img/nhdai/48.jpg" },
{ author: "nhdai", src: "img/nhdai/49.jpg" },
{ author: "nhdai", src: "img/nhdai/50.jpg" },
{ author: "nhdai", src: "img/nhdai/51.jpg" },
{ author: "nhdai", src: "img/nhdai/52.jpg" },
{ author: "nhanh", src: "img/nhanh/1.jpg" },
{ author: "nhanh", src: "img/nhanh/2.jpg" },
{ author: "nhdang", src: "img/nhdang/1.jpg" },
{ author: "nhdang", src: "img/nhdang/2.jpg" },
{ author: "nhlongay", src: "img/nhlongay/1.jpg" },
{ author: "pvhlan", src: "img/pvhlan/1.jpg" },
{ author: "pvhlan", src: "img/pvhlan/2.jpg" },
{ author: "pvhlan", src: "img/pvhlan/3.jpg" },
{ author: "pvhlan", src: "img/pvhlan/4.jpg" },
{ author: "pvhlan", src: "img/pvhlan/5.jpg" },
{ author: "pvhlan", src: "img/pvhlan/6.jpg" },
{ author: "pvhlan", src: "img/pvhlan/7.jpg" },
{ author: "pvhlan", src: "img/pvhlan/8.jpg" },
{ author: "pvhlan", src: "img/pvhlan/9.jpg" },
{ author: "pvhlan", src: "img/pvhlan/10.jpg" },
{ author: "pvhlan", src: "img/pvhlan/11.jpg" },
{ author: "pvhlan", src: "img/pvhlan/12.jpg" },
{ author: "pvhlan", src: "img/pvhlan/13.jpg" },
{ author: "pvhlan", src: "img/pvhlan/14.jpg" },
{ author: "pvhlan", src: "img/pvhlan/15.jpg" },
{ author: "pvhlan", src: "img/pvhlan/16.jpg" },
{ author: "pvhlan", src: "img/pvhlan/17.jpg" },
{ author: "pvhlan", src: "img/pvhlan/18.jpg" },
{ author: "pvhlan", src: "img/pvhlan/19.jpg" },
{ author: "pvhlan", src: "img/pvhlan/20.jpg" },
{ author: "pvhlan", src: "img/pvhlan/21.jpg" },
{ author: "pvhlan", src: "img/pvhlan/22.jpg" },
{ author: "pvhlan", src: "img/pvhlan/23.jpg" },
{ author: "pvhlan", src: "img/pvhlan/24.jpg" },
{ author: "pvhlan", src: "img/pvhlan/25.jpg" },
{ author: "pvhlan", src: "img/pvhlan/26.jpg" },
{ author: "pvhlan", src: "img/pvhlan/27.jpg" },
{ author: "pvhlan", src: "img/pvhlan/28.jpg" },
{ author: "pvhlan", src: "img/pvhlan/29.jpg" },
{ author: "thanhlich", src: "img/thanhlich/1.jpg" },

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
