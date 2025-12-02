"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/trungql", (req, res) => {
    res.send("Hello Trunql");
});
app.listen(PORT, () => {
    console.log("🚀 ~ APP - ROOT is running on PORT:", PORT);
});
//# sourceMappingURL=app.js.map