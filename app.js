const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;


canvas.width = canvasWidth;
canvas.height = canvasHeight;


let animate;

let player = new Player(canvasWidth / 2, canvasHeight / 2 - 25, 100, 70, '', './assets/trump.png')

let enemySpawnCoolDown = 120;
let allEnemies = [];


function animator() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    animate = requestAnimationFrame(animator);


    if (player) {
        player.draw(ctx)
        player.controls(canvasWidth, canvasHeight);
    }

    enemySpawnCoolDown--
    if (enemySpawnCoolDown <= 0) {
        enemySpawn()
        enemySpawnCoolDown = 10;
    }


    allEnemies.forEach(enemy => {
        enemy.draw(ctx);
        enemy.move(ctx)
    })

    if (player) {
        checkCollision()
    }
}


function enemySpawn() {
    const randomX = Math.random() * (canvasWidth - 50);
    let enemy = new BaseEnemy(randomX, -60, 90, 70, "crimson", './assets/Senza titolo.png')
    allEnemies.push(enemy)
}


function checkCollision() {
    let playerAssets = [player, ...player.projectiles];

    for (let i = 0; i < playerAssets.length; i++) {
        const pA = playerAssets[i];
        for (let j = 0; j < allEnemies.length; j++) {
            const enemy = allEnemies[j];
            // if (enemy.x < (pA.x + pA.width) && (enemy.x + enemy.width) > (pA.x && enemy.y) < (pA.y + pA.height) && (enemy.y + enemy.height) > pA.y) {
            //     enemy.healthPoints--
            //     console.log("enemy", enemy)
            // }
            if (pA.isColliding(enemy)) {
                pA.collision()
                enemy.collision()
            }

        }
    }
    allEnemies = allEnemies.filter(enemy => enemy.isAlive)
    player.projectiles = player.projectiles.filter(projectile => projectile.isAlive);
    if (!player.isAlive) {
        player = null
    }
}

animator();