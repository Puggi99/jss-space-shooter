class GameObject{
    
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx){
        ctx.fillStyle = 'rgba(244, 247, 118, 0.5)';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}