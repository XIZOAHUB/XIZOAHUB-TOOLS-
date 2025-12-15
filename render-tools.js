<script>
const grid = document.getElementById("tools");

const isNew = (date)=>{
  return (Date.now() - new Date(date)) / 86400000 <= 7;
};

const isTrending = (views)=>{
  return views >= 100;
};

TOOLS.forEach((tool, index)=>{
  const card = document.createElement("a");
  card.href = tool.url;
  card.className = "card visible";
  card.dataset.type = tool.category;

  card.innerHTML = `
    <i class="fas fa-toolbox"></i>
    <h3>${tool.name}</h3>
    <p>${tool.desc}</p>
  `;

  if(isNew(tool.createdAt)){
    const b = document.createElement("span");
    b.className = "badge new";
    b.innerText = "NEW";
    card.appendChild(b);
  }

  if(isTrending(tool.views)){
    const b = document.createElement("span");
    b.className = "badge hot";
    b.innerText = "TRENDING";
    card.appendChild(b);
  }

  grid.appendChild(card);
});
</script>
