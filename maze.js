const main = document.querySelector('main');
document.querySelector('main').innerHTML = "";

const multiline =
    `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

const allLabyrinthe = document.createElement('div')
//allLabyrinthe.textContent= multiline
allLabyrinthe.className = "allLabyrinthe"
main.appendChild(allLabyrinthe)

const player = document.createElement('div')
player.className = 'player'


for (let i = 0; i < multiline.length; i++) {

    if (multiline[i].split('') == '*') {
        const etoile_mur = document.createElement('div')
        // etoile_mur.textContent = multiline[i].split('')
        etoile_mur.className = "etoile_mur" //on rentre ici 2 class séparer par un espace
        allLabyrinthe.appendChild(etoile_mur)

    } else if (multiline[i].split('') == '.') {
        const point_chemin = document.createElement('div')
        // point_chemin.textContent = multiline[i].split('')
        point_chemin.id = i // sert à attribué un id (un numéro) à toute les case du chemin
        point_chemin.className = "point_chemin"
        allLabyrinthe.appendChild(point_chemin)

    } else if (multiline[i].split('') == 'S') {
        const start = document.createElement('div')
        start.className = "start"
        start.id = i // sert à attribué un id (un numéro) à case start
        allLabyrinthe.appendChild(start)
        start.appendChild(player)

    } else if (multiline[i].split('') == 'T') {
        const arriver = document.createElement('div')
        arriver.className = "arriver"
        arriver.id = i // sert à attribué un id (un numéro) à case start
        allLabyrinthe.appendChild(arriver)
    }
}

let playerPosition = 15 

// "ArrowUp" = button flèche du haut du clavier ... ect
document.body.addEventListener('keyup', function (e) {

    switch (e.key) {
        case "ArrowUp":
            decalTop();
            break;

        case "ArrowDown":
            decalDown();
            break;

        case "ArrowRight":
            decalRight();
            break;

        case "ArrowLeft":
            decalLeft();
            break;

        default:
            break;
    }
})

function decalTop() {
    let play = playerPosition - 14 //chelou
    //console.log(play);
    if (multiline[play].split('') != '*') {
        //console.log('chu ds le if et je bouge en haut'); 
        playerPosition = play
        document.getElementById(playerPosition).appendChild(player) //on recup l'id de la case puis on appel player dans sa nouvel case

        //console.log(document.getElementById(play).appendChild(player))
        
    } else {
        console.log('il y a un mur');
    }
}

function decalDown() {
    let play = playerPosition + 14 //chelou
    //console.log(play);
    if (multiline[play].split('') != '*') {
        //console.log('chu ds le if et je bouge en bas'); 
        playerPosition = play
        document.getElementById(playerPosition).appendChild(player) 

        //console.log(document.getElementById(play).appendChild(player))
    } else {
        console.log('il y a un mur');
    }
}

function decalRight() {
    let play = playerPosition + 1
    //console.log(play);
    if (multiline[play].split('') != '*') {
        //console.log('chu ds le if et je bouge à droite'); 
        playerPosition = play
        document.getElementById(playerPosition).appendChild(player)

        //console.log(document.getElementById(play).appendChild(player))
    } else {
        console.log('il y a un mur');
    }
}

function decalLeft() {
    let play = playerPosition - 1
    //console.log(play);
    if (multiline[play].split('') != '*') {
        //console.log('chu ds le if et je bouge à gauche'); 
        playerPosition = play
        document.getElementById(playerPosition).appendChild(player)

        //console.log(document.getElementById(play).appendChild(player))
    } else {
        console.log('il y a un mur');

    }
}