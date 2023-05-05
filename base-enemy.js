class BaseEnemy extends GameObject{
    constructor(x, y, width, height, color = 'red', imageUrl){
        super(x, y, width, height, color, imageUrl)
        this.speed = 3;
        this.healthPoints = 10;
    }

    move(){
        this.y += this.speed;
    }


}