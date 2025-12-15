const grid = document.getElementById("tools");
const loadBtn = document.getElementById("loadBtn");

const FEATURED = 8;   // index.html par sirf top 8
const STEP = 8;
let visible = FEATURED;

const isNew = (date)=>{
  return (Date.now() - new Date(date)) / 86400000 <= 7;
};

const isTrending = (views)=>{
  return views >= 100;
};

function render(){
  grid.innerHTML = "";

  TOOLS.slice(0, visible).forEach(tool=>{
    const card = document.createElement("a");
    card.href = tool.url;
    card.className = "card";
    card.dataset.type = tool.category;

    card.innerHTML = `
      <i class="fas fa-toolbox"></i>
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
    `;

    // NEW badge
    if(isNew(tool.createdAt)){
      const b = document.createElement("span");
      b.className = "badge new";
      b.innerText = "NEW";
      card.appendChild(b);
    }

    // TRENDING badge
    if(isTrending(tool.views)){
      const b = document.createElement("span");
      b.className = "badge hot";
      b.innerText = "TRENDING";
      card.appendChild(b);
    }

    grid.appendChild(card);
  });

  // Load more visibility
  if(loadBtn){
    loadBtn.style.display = visible >= TOOLS.length ? "none" : "inline-block";
  }
}

// Load more
if(loadBtn){
  loadBtn.onclick = ()=>{
    visible += STEP;
    render();
    setTimeout(()=>{
      grid.lastElementChild?.scrollIntoView({behavior:"smooth",block:"center"});
    },100);
  };
}

render();
