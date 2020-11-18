const db = require('./database/connection');

function getUserNamePost() {
  return db.query('SELECT username, post FROM ourdata').then((results) => {
    return results.rows;
  });
}

function createNewpost(data) {
  const values = [data.username, data.first_name, data.post];
  console.log(values);
  return db.query(
    `
      INSERT INTO ourdata(username, first_name, post) VALUES($1,$2,$3)`,
    values
  );
}

module.exports = {
  getUserNamePost,
  createNewpost,
};
