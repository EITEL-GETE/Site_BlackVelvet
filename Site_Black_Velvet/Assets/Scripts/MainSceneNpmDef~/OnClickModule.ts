import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class OnClickModule extends Behaviour {

    onClick(roomNumber) {
        SelectRoom(roomNumber, 1);
    }
    
}