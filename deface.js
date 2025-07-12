document.body.innerHTML = '';
document.body.style.backgroundColor = 'black';
document.title = 'Fucked by txpn7';

let h1 = document.createElement('h1');
h1.innerHTML = 'Fucked by <span style="color:red; text-shadow:0 0 10px white;">txpn7</span>';
h1.style.textAlign = 'center';
h1.style.fontSize = '3em';
h1.style.fontFamily = 'Comic Sans MS, cursive';
h1.style.color = 'white';
h1.style.marginTop = '30px';
h1.style.textShadow = '0 0 15px red';
document.body.appendChild(h1);

let img = document.createElement('img');
img.src = 'https://www.icegif.com/wp-content/uploads/2023/08/icegif-215.gif';
img.style.display = 'block';
img.style.margin = '30px auto';
img.style.maxWidth = '90%';
img.style.width = '300px';
document.body.appendChild(img);

let audio = document.createElement('audio');
audio.src = 'https://raw.githubusercontent.com/tecniccomsono/deface/main/16-bits-musica-294099.mp3';
audio.autoplay = true;
audio.loop = true;
audio.controls = true;
audio.style.display = 'block';
audio.style.margin = '20px auto';
document.body.appendChild(audio);
