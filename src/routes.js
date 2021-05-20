const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
