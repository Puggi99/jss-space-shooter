class GameObject {

    constructor(x, y, width, height, color = "black", imageUrl) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        if (imageUrl) {
            this.image = new Image();
            this.image.onload = () => {
                this.hasImage = true;
            }
            this.image.src = imageUrl
        }
    }

    draw(ctx) {
        // ctx.fillStyle =  this.color //'rgba(244, 247, 118, 0.5)';
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        if (this.hasImage) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }

}