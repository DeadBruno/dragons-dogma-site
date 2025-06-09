const classes = [
  "⚔️ Lutador - Corpo a corpo com escudo e espada",
  "🧙🏽 Mago - Magias de cura e ataque elemental",
  "🏹 Arqueiro - Ataques à distância com arco",
  "🛡️ Guerreiro - Forte e resistente com armas pesadas",
  "🔮 Feiticeiro - Magias poderosas e devastadoras",
  "🗡️ Assassino - Versátil, combina força e agilidade",
  "🌌 Místico Cavaleiro - Magia + combate corpo a corpo"
  "✨ Arqueiro Mágico - Magia + combate a distancia"
];

const lista = document.getElementById('lista-classes');

classes.forEach(classe => {
  const li = document.createElement('li');
  li.textContent = classe;
  lista.appendChild(li);
});
