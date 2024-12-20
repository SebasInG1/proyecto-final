"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.imparteRouter = void 0;
const express_1 = __importDefault(require("express"));
const impartirController = __importStar(require("../controllers/imparteController"));
const imparteRouter = express_1.default.Router();
exports.imparteRouter = imparteRouter;
imparteRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newImparte = req.body;
    impartirController.create(newImparte, (err, result) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
}));
imparteRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    impartirController.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
}));
imparteRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    impartirController.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
}));
imparteRouter.get('/:grupo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupo = parseInt(req.params.grupo);
    impartirController.getById(grupo, (err, result) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        if (!result) {
            return res.status(404).json({ 'message': 'Estudiante no encontrado' });
        }
        res.status(result.statusCode).json(result);
    });
}));
imparteRouter.put('/:grupo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupo = parseInt(req.params.grupo);
    /*
    ... operador de propagación (spread operator) en JavaScript y TypeScript.
    Este operador permite expandir un objeto o un array en sus elementos individuales
    */
    const updatedImparte = Object.assign(Object.assign({}, req.body), { grupo });
    impartirController.update(updatedImparte, (err, result) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
}));
imparteRouter.delete('/:grupo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupo = parseInt(req.params.grupo);
    impartirController.remove(grupo, (err, result) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }
        res.status(result.statusCode).json(result);
    });
}));
