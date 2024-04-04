const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imageFilename = ['pic1.JPG', 'pic2.JPG', 'pic3.JPG', 'pic4.JPG', 'pic5.JPG'];


imageFilename.forEach(filename => {
    
    const newImage = document.createElement('img');
    
    
    newImage.src = `images/${filename}`;
    newImage.alt = filename;
    
   
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', function() {
        displayedImage.src = this.src; 
        displayedImage.alt = this.alt; 
    });
});


btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);


