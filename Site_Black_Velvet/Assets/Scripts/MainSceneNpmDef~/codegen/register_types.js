import { TypeStore } from "@needle-tools/engine/engine/engine_typestore"

// Import types
import { RotateCentralObj } from "../RotateCentralObj.js";
import { RotateModule } from "../RotateModule.js";

// Register types
TypeStore.add("RotateCentralObj", RotateCentralObj);
TypeStore.add("RotateModule", RotateModule);
