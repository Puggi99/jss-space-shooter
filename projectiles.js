class Projectiles extends GameObject{

    constructor(x, y, width, height, color = "yellow"){
        super(x, y, width, height, color)
        this.speed = 15;
    }

    
    move(){
        this.y -= this.speed;
    }
}