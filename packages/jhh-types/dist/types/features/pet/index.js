"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
var mongoose_1 = require("mongoose");
var Species;
(function (Species) {
    Species["DOG"] = "DOG";
    Species["CAT"] = "CAT";
    Species["BIRD"] = "BIRD";
})(Species || (Species = {}));
var petSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    name: String,
    species: {
        type: String,
        enum: Object.values(Species),
    },
    iconId: {
        type: String,
        default: "default-pet-icon",
    },
});
exports.Pet = (0, mongoose_1.model)("Pet", petSchema);
