import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class RotateCentralObj extends Behaviour {
    update() {

        document.addEventListener( 'mousewheel', (event) => {
            //console.log(event.deltaY);
            if(event.deltaY>0)
            {
                this.gameObject.rotateY(-5/100000 * 0.5);
            }
            else
            {
                this.gameObject.rotateY(5/100000 * 0.5);
            }
        });

    }
}