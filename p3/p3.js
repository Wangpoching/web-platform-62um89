window.addEventListener('load', () => {
  const oReq = new XMLHttpRequest();
  function addInfo(name, company, email) {
    const li = document.createElement('li');
    li.innerHTML = `${name} / ${company} / ${email} <button>刪除</button>`;
    document.querySelector('ol').appendChild(li);
  }
  oReq.onreadystatechange = function() {
    if (oReq.readyState === 4) {
      res = JSON.parse(oReq.response);
      for (i of res) {
        const name = i.name;
        const company = i.company.name;
        const email = i.email;
        addInfo(name, company, email);
      }
    }
  };
  oReq.open('GET', 'https://jsonplaceholder.typicode.com/users');
  oReq.send();
  document.querySelector('ol').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      e.target.parentNode.remove();
    }
  });
});
