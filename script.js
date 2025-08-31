var Game = {};

Game.board = document.getElementById("board");
Game.keyboard = document.getElementById("keyboard");

Game.wordLength = 5;
Game.guessCount = 6;
Game.letters = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'"

Game.guess = "";
Game.guesses = [];

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

Game.setUpKeyboard = function(){
    for(var i = 0; i < Game.letters.length; i++){
        key = document.createElement("div");
        key.id = `key-${i}`;
        key.classList.add("key");
        key.innerHTML = Game.letters[i];
        key.setAttribute("onclick", `Game.input(${i})`);
        Game.keyboard.appendChild(key);
    }

    erase = document.createElement("div");
    erase.id = "key-erase";
    erase.classList.add("key");
    erase.innerHTML = "❌";
    erase.setAttribute("onclick", `Game.input(34)`);
    Game.keyboard.appendChild(erase);

    enter = document.createElement("div");
    enter.id = "key-enter";
    enter.classList.add("key");
    enter.innerHTML = "✅";
    enter.setAttribute("onclick", `Game.input(35)`);
    Game.keyboard.appendChild(enter);
};

Game.togglePanel = function(side){
    panelContent = document.getElementById(`${side}-panel-content`);
    panelContent.classList.toggle("panel-enabled");
};

Game.input = function(index){
    x = Game.guess.length;
    y = Game.guesses.length;
    if(index == 34){
        // Erase
        if(Game.guesses.length >= Game.guessCount) return;
        if(Game.guess.length <= 0) return;
        Game.guess = Game.guess.slice(0, -1);
        Game.setTile(x - 1, y, -1)
    }else if(index == 35){
        if(Game.guess.length != Game.wordLength) return;
        // Enter
        Game.guesses.push(Game.guess)
        Game.guess = ""
    }else{
        // Type a letter
        if(Game.guess.length >= Game.wordLength) return;
        if(Game.guesses.length >= Game.guessCount) return;
        Game.guess += Game.letters[index];
        Game.setTile(x, y, index);
    }
};

Game.setTile = function(x, y, index){
    tile = document.getElementById(`tile-${y}-${x}`);
    if(index != -1) tile.innerHTML = Game.letters[index];
    else tile.innerHTML = "";
};

Game.setUpBoard();
Game.setUpKeyboard();