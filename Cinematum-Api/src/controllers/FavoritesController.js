const { poolPromise } = require('../config/connection')  

async function getFavorites(req, res) {
    try{
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query('exec USP_GetFavorites', function(err, result) {  
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

async function postFavorite(req, res) {
    try{
        let genreName = req.body.IdFilm;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`insert into favorites values ('${genreName}')`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El film se agregó a favoritos'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function deleteFavorites(req, res) {
    try{
        let favoriteId = req.params.ID;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`delete from favorites where ID =  ('${favoriteId}')`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El film se elimino de favoritos'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

module.exports = {
    getFavorites,
    postFavorite,
    deleteFavorites
}