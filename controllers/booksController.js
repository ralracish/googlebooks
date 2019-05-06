const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        
        const bookInfo = {
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            image: req.body.imageLinks.smallThumbnail,
            link: req.body.infoLink
        };
        //console.log('..test', bookInfo)
        db.Book
            .create(bookInfo)
            .then(dbModel => {
                //console.log(dbModel)
                res.json(dbModel)
            } )
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    
    remove: function (req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
