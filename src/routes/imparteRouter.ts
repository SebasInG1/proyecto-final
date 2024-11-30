import express, { Request, Response } from 'express';
import * as impartirController from '../controllers/imparteController';
import { Imparte } from '../models/imparteModel';
const imparteRouter = express.Router();

imparteRouter.post('/', async (req: Request, res: Response) => {
    const newImparte: Imparte = req.body;
    impartirController.create(newImparte, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }

        res.status(result.statusCode).json(result);
    });
});

imparteRouter.get('/', async (req: Request, res: Response) => {
    impartirController.getAll((err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }

        res.status(result.statusCode).json(result);
    });
});

imparteRouter.get('/', async (req: Request, res: Response) => {
    impartirController.getAll((err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }

        res.status(result.statusCode).json(result);
    });
});

imparteRouter.get('/:grupo', async (req: Request, res: Response) => {
    const grupo = parseInt(req.params.grupo);
    impartirController.getById(grupo, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }

        if (!result) {
            return res.status(404).json({ 'message': 'Estudiante no encontrado' });
        }

        res.status(result.statusCode).json(result);
    }); 
});

imparteRouter.put('/:grupo', async (req: Request, res: Response) => {
    const grupo = parseInt(req.params.grupo);
    /*
    ... operador de propagación (spread operator) en JavaScript y TypeScript.
    Este operador permite expandir un objeto o un array en sus elementos individuales
    */
    const updatedImparte: Imparte = { ...req.body, grupo };

    impartirController.update(updatedImparte, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }

        res.status(result.statusCode).json(result);
    });
});

imparteRouter.delete('/:grupo', async (req: Request, res: Response) => {
    const grupo = parseInt(req.params.grupo);

    impartirController.remove(grupo, (err: Error, result: any) => {
        if (err) {
            return res.status(500).json({ 'message': err.message });
        }

        res.status(result.statusCode).json(result);
    });
});

export { imparteRouter };