// Geiru Protection LoRA is pink like the rest of the Geiru Context Suite.
// A colour you set yourself on a node (right-click > Colors) is saved with the workflow and kept.
import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "geiru.protection.lora.colors",
    async beforeRegisterNodeDef(nodeType, nodeData) {
        if (nodeData.name !== "H3ClownProtectionLora") return;
        const onCreated = nodeType.prototype.onNodeCreated;
        nodeType.prototype.onNodeCreated = function () {
            const r = onCreated?.apply(this, arguments);
            if (!this.color) this.color = "#c2407a";
            if (!this.bgcolor) this.bgcolor = "#6e2347";
            return r;
        };
    },
});
