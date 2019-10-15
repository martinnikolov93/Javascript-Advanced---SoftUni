function create(words) {
   let contentDiv = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = words[i];
      div.appendChild(p);
      contentDiv.appendChild(div);
      div.addEventListener('click', function (){
         p.style.display = 'block';
      });
   }
}