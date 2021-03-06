const { poolPromise } = require('../config/connection')  

async function getFilms(req, res) {
    try{
        const pool = await poolPromise;
        const result = await pool.request()  
            .query('exec USP_GetMovies -1', function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json(result.recordset);  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err)  
    } 
}

async function getFilmById(req, res) {
    try{
        console.log(req.params.id);
        let movieID = req.params.id;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`exec USP_GetMovies ${movieID}`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    let resultDB = {};
                    if(result.recordset.length > 0){
                        resultDB = result.recordset[0];
                    }
                    res.json(resultDB);
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function getRandomFilm(req, res) {
    try{
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`exec USP_GetRandomMovie`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else { 
                    let resultDB = {};
                    if(result.recordset.length > 0){
                        resultDB = result.recordset[0];
                    }
                    res.json(resultDB); 
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function postFilm(req, res) {
    try{
        let name = req.body.Name;
        let director = req.body.Director;
        let idGenre = req.body.IdGenre;
        let description = req.body.Description;
        let type = req.body.Type;
        let year = req.body.Year;
        let review = req.body.Review;
        let score = req.body.Score;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`insert into film values ('${name}','${director}','${idGenre}','${description}','${type}','${year}','${review}','${score}')`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El film se agreg?? correctamente'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function putFilm(req, res) {
    try{
        let filmID = req.body.ID;
        let name = req.body.Name;
        let director = req.body.Director;
        let idGenre = req.body.IdGenre;
        let description = req.body.Description;
        let type = req.body.Type;
        let year = req.body.Year;
        let review = req.body.Review;
        let score = req.body.Score;
        
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`update film set [Name] = '${name}', Director = '${director}', idGenre = ${idGenre}, [Description] = '${description}', [Type] = '${type}', [Year] = '${year}', Review = '${review}', Score = '${score}' where ID = '${filmID}'`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El fil se actualiz?? correctamente'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function deleteFilm(req, res) {
    try{
        let filmID = req.params.id;
        const pool = await poolPromise;  
        const result = await pool.request()  
            .query(`delete from Film where ID =  ('${filmID}')`, function(err, result) {  
                if (err)  {  
                    console.log(err)  
                }  
                else {  
                    res.json({ 
                        success: true,
                        message: 'El film se elimin?? correctamente'
                    });  
                }  
            })  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

async function test(req, res) {
    try{
                    res.json({ 
                        success: true,
                        message: 'Si esta jalando'
                    });  
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
}

module.exports = {
    getFilms,
    getFilmById,
    getRandomFilm,
    postFilm,
    putFilm,
    deleteFilm,
    test
}