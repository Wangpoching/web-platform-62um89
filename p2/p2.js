// 把程式碼寫在這檔案裡面
function getRandom(num) {
  return Math.floor(Math.random() * num);
}
function addFood(food, index) {
  const li = document.createElement('li');
  li.innerHTML = `${food} <button class="delete">刪除</button>`;
  li.setAttribute('data-id', index);
  document.querySelector('ol').appendChild(li);
}
const randomFoods = ['拉麵', '泡麵', '乾麵', '陽春麵', '牛肉麵'];
window.addEventListener('load', () => {
  // 初始變數
  let userData;
  let index;
  if (!sessionStorage.getItem('foods')) {
    userData = {};
    index = 0;
  } else {
    userData = JSON.parse(sessionStorage.getItem('foods'));
    for (let key in userData) {
      addFood(userData[key], key);
    }
    index = Number(Object.keys(userData)[Object.keys(userData).length]);
  }
  console.log(Object.keys(userData));
  // 新增
  document.querySelector('.add').addEventListener('click', e => {
    const food = document.querySelector('input').value;
    if (food === '') {
      alert('請填入清單');
      return;
    }
    document.querySelector('input').value = '';
    console.log(index);
    addFood(food, index);
    userData[index] = food;
    sessionStorage.setItem('foods', JSON.stringify(userData));
    index++;
  });
  // 刪除
  document.querySelector('ol').addEventListener('click', e => {
    if (e.target.className === 'delete') {
      const deleteID = e.target.parentNode.getAttribute('data-id');
      e.target.parentNode.remove();
      delete userData[deleteID];
      sessionStorage.setItem('foods', JSON.stringify(userData));
    }
    if (Object.keys(userData).length === 0) {
      sessionStorage.clear();
    }
  });
  // 全部刪除
  document.querySelector('.delete-all').addEventListener('click', () => {
    document.querySelector('ol').innerHTML = '';
    userData = {};
    sessionStorage.clear();
  });
  document.querySelector('.goodluck').addEventListener('click', () => {
    const randomFood = randomFoods[getRandom(randomFoods.length)];
    addFood(randomFood, index);
    userData[index] = randomFood;
    sessionStorage.setItem('foods', JSON.stringify(userData));
    index++;
  });
});
