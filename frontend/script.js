document.getElementById('formIdoso').addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  await fetch('http://localhost:3000/idosos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  alert('Idoso cadastrado com sucesso!');
  this.reset();
});
