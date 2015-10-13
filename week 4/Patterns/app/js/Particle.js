/**
 * Created by justijndepover on 13/10/15.
 */

function Particle(posX, posY){
    this.posX = posX;
    this.posY = posY;

    this.velX = 1;
    this.velY = 0;
    this.size = 1;
    this.shrink = 1;
    this.drag = 1;
    this.gravity = 0;
    this.alpha = 1;
    this.fade = 0.01;
}

Particle.prototype.update = function(){
    this.velX *= this.drag;
    this.velY *= this.drag;
    this.velY += this.gravity;
    this.posX += this.velX;
    this.posY += this.velY;
    this.size *= this.shrink;
    this.alpha -= this.fade;
};

Particle.prototype.render = function(context){
    var kleur = Math.floor(Math.random() * 254);
    var kleur2 = Math.floor(Math.random() * 254);
    var kleur3 = Math.floor(Math.random() * 254);
    context.fillStyle = "rgba("+ kleur +", "+ kleur2 +", "+ kleur3 +", " + this.alpha + ")";
    context.beginPath();
    context.arc(this.posX, this.posY, this.size, 0, 2*Math.PI);
    context.closePath();
    context.fill();
};