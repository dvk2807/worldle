var Game = {};

Game.board = document.getElementById("board");
Game.keyboard = document.getElementById("keyboard");

Game.wordLength = 5;
Game.guessCount = 6;
Game.letters = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'"

Game.setUpBoard = function(){
    Game.board.style.gridTemplateRows = `repeat(${Game.guessCount}, 1fr)`;
    Game.board.style.gridTemplateColumns = `repeat(${Game.wordLength}, 1fr)`;
    for(var y = 0; y < Game.guessCount; y++){
        for(var x = 0; x < Game.wordLength; x++){
            tile = document.createElement("div");
            tile.id = `tile-${y}-${x}`;
            tile.classList.add("tile");
            Game.board.appendChild(tile);
        }
    }
};

Game.setUpKeyBoard = function(){
    characters = Game.letters + "❌✅"
    for(var i = 0; i < characters.length; i++){
        key = document.createElement("div");
        key.id = `key-${i}`;
        key.classList.add("key");
        key.innerHTML = characters[i];
        Game.keyboard.appendChild(key);
    }
};

Game.togglePanel = function(side){
    panelContent = document.getElementById(`${side}-panel-content`);
    panelContent.classList.toggle("panel-enabled");
};

Game.setUpBoard();
Game.setUpKeyBoard();