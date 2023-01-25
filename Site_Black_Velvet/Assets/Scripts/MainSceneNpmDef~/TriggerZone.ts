import { Behaviour, serializeable, } from "@needle-tools/engine";
import { RotateModule } from "./RotateModule";

// Documentation → https://docs.needle.tools/scripting

export class TriggerZone extends Behaviour {

    @serializeable(RotateModule)
    originRotat : RotateModule | null = null;
    @serializeable()
    roomNumber : number = 0;
    roomName : string = "";

    update()
    {
        this.roomNumber = this.originRotat.roomNumber;
        //console.log(this.roomNumber);
        switch(this.roomNumber)
        {
        case 0 :
            this.roomName = "Room_Beach";
            break;
        case 1 :
            this.roomName = "Room_Cave";
            break;
        case 2 :
            this.roomName = "Room_Cyber";
            break;
        case 3 :
            this.roomName = "Room_virtualium";
            break;
        case 4 :
            this.roomName = "Room_Bar";
            break;
        
        }
    }
    
    onTriggerEnter(col : Collision) 
    {
    console.log(col.gameObject.name);
        if(col.gameObject.name == this.roomName)
        {
            this.originRotat.nextBool = false;
            this.originRotat.prevBool = false;
        }
    }
}