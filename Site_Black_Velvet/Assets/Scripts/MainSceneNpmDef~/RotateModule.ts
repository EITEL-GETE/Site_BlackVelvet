import { Behaviour, serializeable } from "@needle-tools/engine";


export class RotateModule extends Behaviour {
    
    maxVelocity : number = 15;
    currentVelocity : number = 0;
    velocityDamping : number = .2;
    accelerationMultiplier : number = 5;
    directionMultiplier : number = 0;
    roomNumber : number = 0;
    prevBool : boolean = false;
    nextBool : boolean = false;
    
    start()
    {
    SelectRoom(0, 1);
    //SetNextRoom(2)
    }
    
    update()
    {
        if(this.prevBool)
            this.PrevRoom();
            
        if(this.nextBool)
            this.NextRoom();
    }
    
   
    NextRoom()
    {
    //console.log("APRES")
        this.gameObject.rotateY(-0.005);
        this.gameObject.translateY(0.006);
    }

    PrevRoom()
    {
    //console.log("AVANT")
        this.gameObject.rotateY(0.005);
        this.gameObject.translateY(-0.006);
    }
}