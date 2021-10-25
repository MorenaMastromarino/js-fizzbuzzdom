const row = document.querySelector('.row');


for (let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  row.append(box);
  console.log(box);
}