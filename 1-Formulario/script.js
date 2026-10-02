const form = document.getElementById('contactForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const sexo = document.querySelector('input[name="sexo"]:checked')?.value || 'No seleccionado';
  const email = document.getElementById('email').value;
  const nick = document.getElementById('nick').value;
  const comentario = document.getElementById('comentario').value;

  console.log({
    nombre,
    apellido,
    sexo,
    email,
    nick,
    comentario
  });

  resultado.innerHTML = `
    <h3>Datos enviados</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Sexo:</strong> ${sexo}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Nick:</strong> ${nick}</p>
    <p><strong>Comentario:</strong> ${comentario}</p>
  `;

  document.body.classList.add('enviado');
});