import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class TriggerZone extends Behaviour {
    
    onTriggerEnter(col : Collision) 
    {
        //console.log("trigger");
        console.log(col.gameObject.name);
    }
}