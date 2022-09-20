import { Behaviour, serializeable } from "@needle-tools/engine";

// Documentation → https://docs.needle.tools/scripting

export class test extends Behaviour {
    start() {
        console.log("CHELOU MAIS 9A MArCHE");
    }

    update() {

        document.addEventListener( 'mousewheel', (event) => {
            console.log(event.deltaY);
            if(event.deltaY>0)
            {
                this.gameObject.rotateY(5/100000);
            }
            else
            {
                this.gameObject.rotateY(-5/100000);
            }
        });

    }



}