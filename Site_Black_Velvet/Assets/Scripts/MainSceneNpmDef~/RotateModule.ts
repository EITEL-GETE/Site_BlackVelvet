import { Behaviour, serializeable } from "@needle-tools/engine";

export class RotateModule extends Behaviour {
    
    maxVelocity : number = 15;
    currentVelocity : number = 0;
    velocityDamping : number = .2;
    accelerationMultiplier : number = 5;
    directionMultiplier : number = 0;

    update(){
    let isDone: boolean = false;
        // GET MOUSEWHEEL
        document.addEventListener( 'wheel', (event) => {
            isDone = true;
            this.currentVelocity += this.accelerationMultiplier;
            if (this.currentVelocity > this.maxVelocity)
                this.currentVelocity = this.maxVelocity;

            this.directionMultiplier = event.deltaY / Math.abs(event.deltaY);
        });
        
        if(!isDone)
        {
            document.addEventListener( 'mousewheel', (event) => {
                this.currentVelocity += this.accelerationMultiplier;
                if (this.currentVelocity > this.maxVelocity)
                    this.currentVelocity = this.maxVelocity;
    
                this.directionMultiplier = event.deltaY / Math.abs(event.deltaY);
            });
        }
        

        // DO MOVEMENTS
        this.gameObject.rotateY(  -5/10000 * this.currentVelocity * this.directionMultiplier);
        this.gameObject.translateY(6/10000 * this.currentVelocity * this.directionMultiplier);

        // DO DAMPING
        if (this.currentVelocity > 0)
            this.currentVelocity -= this.velocityDamping;
        else this.currentVelocity = 0;
    }
}