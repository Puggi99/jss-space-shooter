class Projectiles extends GameObject{

    constructor(x, y, width, height, color = "yellow", imageUrl){
        super(x, y, width, height, color, imageUrl)
        this.speed = 15;
    }

    
    move(){
        this.y -= this.speed;
    }

    collision(){
        this.isAlive = false
    }
}