const { poolPromise } = require('../config/connection')  

async function listarGeneros(req, res) {
    try{
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query('select * from genre', function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json(result.recordset);  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function createGenre(req, res) {
    try{
        console.log(req.body);
        let genreName = req.body.Name;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`insert into Genre values ('${genreName}')`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El genero se agregó correctamente'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function deleteGenre(req, res) {
    try{
        let genrID = req.params.id;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`delete from Genre where ID =  ('${genrID}')`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El genero se agregó correctamente'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

module.exports = {
    listarGeneros,
    createGenre,
    deleteGenre
}