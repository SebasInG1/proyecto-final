import { Imparte } from "../models/imparteModel";
import { db } from "../../db";
import { OkPacket, RowDataPacket } from "mysql2";
import { groupCollapsed } from "console";

export const create = (imparte: Imparte, callback: Function) => {
    const queryString = 'INSERT INTO imparte (id_p,cod_a, grupo, horario ) VALUES (?, ?, ?, ?)';
    db.query(queryString, [imparte.id_p, imparte.cod_a, imparte.grupo, imparte.horario], (err) => {
        if (err) {
            callback(err);
        }
        //const insertId = (<OkPacket>result).insertId;
        //callback(null, insertId);
        callback(null, {
            statusCode: 201,
            message: 'Imparte creado exitosamente',
            data: {
                grupo: imparte.grupo
            }
        });
    });
}

export const getAll = (callback: Function) => {
    const queryString = 'SELECT * FROM imparte';
    db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = <RowDataPacket[]>result;
        const impartes: Imparte[] = [];
        rows.forEach(row => {
            const imparte: Imparte = {
                id_p: row.id_p,
                cod_a: row.cod_a,
                grupo: row.grupo,
                horario: row.horario
            };
            impartes.push(imparte);
        });
        callback(null, {
            statusCode: 200,
            message: 'Impartes obtenidos exitosamente',
            data: impartes
        });
    });
}

export const getById = (grupo: number, callback: Function) => {
    const queryString = 'SELECT * FROM imparte WHERE grupo = ?';
    db.query(queryString, [grupo], (err, result) => {
        if (err) {
            callback(err);
        }
        const row = (<RowDataPacket[]>result)[0];
        if (row) {
            const imparte: Imparte = {
                id_p: row.id_p,
                cod_a: row.cod_a,
                grupo: row.grupo,
                horario: row.horario
            };
            callback(null, {
                statusCode: 200,
                message: 'Imparte obtenido exitosamente',
                data: imparte
            });
        } else {
            callback(null, {
                statusCode: 404,
                message: 'Imparte no encontrado'
            });
        }
    });
}

export const update = (imparte: Imparte, callback: Function) => {
    const queryString = 'UPDATE imparte SET cod_a = ?, id_p = ?, horario = ? WHERE grupo = ?';
    db.query(queryString, [imparte.cod_a, imparte.id_p, imparte.horario, imparte.grupo], (err) => {
        if (err) {
            callback(err);
        }
        callback(null, {
            statusCode: 200,
            message: 'Imparte actualizado exitosamente',
            data: {
                grupo: imparte.grupo
            }
        });
    });
}

export const remove = (grupo: number, callback: Function) => {
    const queryString = 'DELETE FROM imparte WHERE grupo = ?';
    db.query(queryString, [grupo], (err) => {
        if (err) {
            callback(err);
        }
        callback(null, {
            statusCode: 200,
            message: 'Imparte eliminado exitosamente'
        });
    });
}