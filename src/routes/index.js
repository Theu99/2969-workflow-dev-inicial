import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import editoras from './editorasRoutes.js';
import eventos from './eventosRoutes.js'
const routes = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'Curso de node' });
  });

  app.use(
    express.json(),
    livros,
    autores,
    editoras,
    eventos
  );
};

export default routes;
