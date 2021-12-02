const express = require('express');
const cors = require('cors')

const app = express();
const corsOptions ={
    origin:'http://localhost:8080', 
}
app.use(cors(corsOptions));

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./config/connection');
app.use(require('./routes/GenreRoute'));
app.use(require('./routes/FilmRoute'));
app.use(require('./routes/FavoritesRoute'));

app.listen(app.get('port'), (error) => {
    if(error) {
        console.log("error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});