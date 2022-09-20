import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class RotateModule extends Behaviour {
    
    start() {
    }

    update(){
        document.addEventListener( 'mousewheel', (event) => {
            //console.log(event.deltaY);
            if(event.deltaY>0)
            {
                this.gameObject.rotateY(-5/10000 * 0.5);
                this.gameObject.translateY(6/10000 * 0.5);
            }
            else
            {
                this.gameObject.rotateY(5/10000 * 0.5);
                this.gameObject.translateY(-6/10000 * 0.5);
            }
        });
    }
}