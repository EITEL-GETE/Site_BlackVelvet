import { TypeStore } from "@needle-tools/engine/engine/engine_typestore"

// Import types
import { OnClickModule } from "../OnClickModule.ts";
import { RotateCenterAtPoint } from "../RotateCenterAtPoint.ts";
import { RotateCentralobj } from "../RotateCentralObj.ts";
import { RotateModule } from "../RotateModule.ts";
import { TriggerZone } from "../TriggerZone.ts";

// Register types
TypeStore.add("OnClickModule", OnClickModule);
TypeStore.add("RotateCenterAtPoint", RotateCenterAtPoint);
TypeStore.add("RotateCentralobj", RotateCentralobj);
TypeStore.add("RotateModule", RotateModule);
TypeStore.add("TriggerZone", TriggerZone);
