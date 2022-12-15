import { Behaviour, serializeable } from "@needle-tools/engine";

export class RotateModule extends Behaviour {
    
    maxVelocity : number = 15;
    currentVelocity : number = 0;
    velocityDamping : number = .2;
    accelerationMultiplier : number = 5;
    directionMultiplier : number = 0;
    roomBool : boolean = false;
    roomNumber : number = 0;
    
    targetsY: float[] = [ 0.045398129957805004, -0.7240019196011027, -1.4954025782339475, -0.9063908491960557, -0.06879078479883194 ];

    update()
    {
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
        
        
        
        if (this.roomBool === true)
        {
            this.SwitchRoom();
        }
    }
    
    Debug()
    {
        console.log(this.gameObject.rotation);
    }
    
    SwitchRoom()
    {
        // SET X & Z ROTATIONS IN CASE EVERYTHING GOES WRONG
        this.gameObject.rotateY(this.targetsY[this.roomNumber] - this.gameObject.rotation.y + .001);
        // this.gameObject.rotateZ(this.targetsZ[this.roomNumber] - this.gameObject.rotation.z);
        // this.gameObject.rotation = new THREE.Vector3(this.targetsX[this.roomNumber], this.gameObject.rotation.y, this.targetsZ[this.roomNumber]);
        /*
        switch (this.roomNumber)
        {
            case 1 :
                if (this.gameObject.rotation.y < 0.04539812)
                    this.roomBool = false;
                else
                {
                    this.gameObject.rotateY(-0.005);
                    this.gameObject.translateY(0.005);
                } 
                break;
           case 2 :
                if (this.gameObject.rotation.y < -0.7240019196)
                    this.roomBool = false;
                else
                {
                    this.gameObject.rotateY(-0.005);
                    this.gameObject.translateY(0.005);
                } 
                break;
                
            case 3 :
                if (this.gameObject.rotation.y < -1.4954025)
                    this.roomBool = false;
                else
                {
                    this.gameObject.rotateY(-0.005);
                    this.gameObject.translateY(0.005);
                } 
                break;
                
            case 4 :
                if (this.gameObject.rotation.y < 1.70)
                    this.roomBool = false;
                else
                {
                    this.gameObject.rotateY(-0.005);
                    this.gameObject.translateY(0.005);
                } 
                break;
                
            case 5 :
                if (this.gameObject.rotation.y < -0.068790)
                    this.roomBool = false;
                else
                {
                    this.gameObject.rotateY(-0.005);
                    this.gameObject.translateY(0.005);
                } 
                break;
        }*/
    }
}