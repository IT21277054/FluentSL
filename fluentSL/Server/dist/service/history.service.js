"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const History_1 = __importDefault(require("../model/History"));
const addHistory = (user_id, title, description) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('in here');
    const newHistory = new History_1.default({
        user_id: user_id,
        title: title,
        description: description,
    });
    const history = yield newHistory.save();
    const userHistory = JSON.parse(JSON.stringify(history));
    return userHistory;
});
exports.default = { addHistory };
