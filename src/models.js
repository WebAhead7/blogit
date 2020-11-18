const db = require('../database/connection');

function getUserNamePost() {
  return db.query('SELECT * FROM ourdata').then((results) => {
    return results.rows;
  });
}

function createNewpost(data) {
  const values = [data.username, data.myname, data.post];
  return db.query(
    `
      INSERT INTO ourdata(username, myname, post) VALUES($1,$2,$3)`,
    values
  );
}

module.exports = {
  getUserNamePost,
  createNewpost,
};
