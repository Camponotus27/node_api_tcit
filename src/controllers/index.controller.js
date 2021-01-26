const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '0102',
    database: 'challenge_tcit',
    port: '5432'
});

const formatResponseCorrect = (data, message = '') => {
    return {
        message: message,
        errors: {},
        data: data
    };
};

const formatResponseError = (errors, message = '') => {
    return {
        message: message,
        errors: errors,
        data: {}
    };
};

const getPosts = (req, res) => {

    pool.query('SELECT id, name, description FROM post').
    then(queryRes => {
            res.status(200).json(formatResponseCorrect(queryRes.rows));
        })
        .catch(err => {
            res.status(400).json(formatResponseError(err));
        });
};


const getPostById = (req, res) => {

    const { id } = req.params;

    pool.query('SELECT id, name, description FROM post WHERE id=$1 LIMIT 1', [id])
        .then((queryRes) => {

            if (queryRes.rows.length > 0)
                res.status(200).json(formatResponseCorrect(queryRes.rows, ''));
            else
                res.status(404).json(formatResponseError({}, 'Post not exists'));

        })
        .catch((err) => {
            res.status(400).json(formatResponseError(err));
        });
};

const createPost = (req, res) => {

    const { name, description } = req.body;

    pool.query('INSERT INTO post (name, description) VALUES ($1, $2) RETURNING id, name, description', [name, description])
        .then((queryRes) => {
            res.status(201).json(formatResponseCorrect(queryRes.rows, 'Post created'));
        })
        .catch((err) => {
            res.status(400).json(formatResponseError(err));
        });
};

const deletePost = (req, res) => {

    const { id } = req.params;

    pool.query('DELETE FROM post WHERE id=$1', [id])
        .then((queryRes) => {
            res.status(200).json(formatResponseCorrect(queryRes.rows, `Post ${id} deleted successfully`));
        })
        .catch((err) => {
            res.status(400).json(formatResponseError(err));
        });
};


module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost
}