const classes = [
  "Lutador",
  "Mago",
  "Arqueiro",
  "Guerreiro",
  "Feiticeiro",
  "Assassino",
  "Místico Cavaleiro"
];

const lista = document.getElementById('lista-classes');

classes.forEach(classe => {
  const li = document.createElement('li');
  li.textContent = classe;
  lista.appendChild(li);
});
