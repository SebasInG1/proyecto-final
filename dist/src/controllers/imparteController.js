"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.getAll = exports.create = void 0;
const db_1 = require("../../db");
const create = (imparte, callback) => {
    const queryString = 'INSERT INTO imparte (id_p,cod_a, grupo, horario ) VALUES (?, ?, ?, ?)';
    db_1.db.query(queryString, [imparte.id_p, imparte.cod_a, imparte.grupo, imparte.horario], (err) => {
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
};
exports.create = create;
const getAll = (callback) => {
    const queryString = 'SELECT * FROM imparte';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const impartes = [];
        rows.forEach(row => {
            const imparte = {
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
};
exports.getAll = getAll;
const getById = (grupo, callback) => {
    const queryString = 'SELECT * FROM imparte WHERE grupo = ?';
    db_1.db.query(queryString, [grupo], (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        if (row) {
            const imparte = {
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
        }
        else {
            callback(null, {
                statusCode: 404,
                message: 'Imparte no encontrado'
            });
        }
    });
};
exports.getById = getById;
const update = (imparte, callback) => {
    const queryString = 'UPDATE imparte SET cod_a = ?, id_p = ?, horario = ? WHERE grupo = ?';
    db_1.db.query(queryString, [imparte.cod_a, imparte.id_p, imparte.horario, imparte.grupo], (err) => {
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
};
exports.update = update;
const remove = (grupo, callback) => {
    const queryString = 'DELETE FROM imparte WHERE grupo = ?';
    db_1.db.query(queryString, [grupo], (err) => {
        if (err) {
            callback(err);
        }
        callback(null, {
            statusCode: 200,
            message: 'Imparte eliminado exitosamente'
        });
    });
};
exports.remove = remove;
