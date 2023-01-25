import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class MoveCamera extends Behaviour {

    @serializeable()
    rightBool : boolean = false;
    leftBool : boolean = false;
    
    update() 
    {
        if(this.rightBool)
            this.moveRight();
            
        if(this.leftBool)
            this.moveLeft();
            
            //console.log(this.gameObject.rotation.y);
            
            if(this.gameObject.rotation.y > -0.4)
            {
                this.rightBool = false;
            }
            
            if(this.gameObject.rotation.y < -1.2)
            {
                this.leftBool = false;
            }
    }
    
    moveLeft() 
    {
        this.gameObject.rotateY(-0.015);
    }
    
    moveRight() 
    {
        this.gameObject.rotateY(0.015);
    }
}