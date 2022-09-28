import { TypeStore } from "@needle-tools/engine/engine/engine_typestore"

// Import types
import { OnClickModule } from "../OnClickModule.ts";
import { RotateCentralobj } from "../RotateCentralObj.ts";
import { RotateModule } from "../RotateModule.ts";

// Register types
TypeStore.add("OnClickModule", OnClickModule);
TypeStore.add("RotateCentralobj", RotateCentralobj);
TypeStore.add("RotateModule", RotateModule);
