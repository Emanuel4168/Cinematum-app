const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('.src/config/connection');
app.use(require('.src/routes/GenreRoute'));
app.use(require('.src/routes/FilmRoute'));
app.use(require('.src/routes/FavoritesRoute'));

app.listen(app.get('port'), (error) => {
    if(error) {
        console.log("error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});