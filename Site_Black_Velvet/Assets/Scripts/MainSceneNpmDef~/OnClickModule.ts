import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class OnClickModule extends Behaviour {

    @serializeable()
    myStringField: string = "Hello World";
    
    start() {
    }
    
    onClick() {
        console.log("CLICK !!!")
    }
    
}