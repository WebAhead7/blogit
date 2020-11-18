BEGIN;


CREATE TABLE ourdata (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  post TEXT NOT NULL,
);

INSERT INTO ourdata (username, first_name, post) VALUES
  ('Sery1976', 'Serya', 'This is my FIRST blog, dsnfso fnldsn lsdng ldn kldskng kdng kdsng kdfngfxkjnkdlng jkdng kdn jfdn jnfdkgn jng dkjng dkjng kd'),
  ('Notne1991', 'Nathan', 'This is my SECOND blog, dsnfso fnldsn lsdng ldn kldskng kdng kdsng kdfngfxkjnkdlng jkdng kdn jfdn jnfdkgn jng dkjng dkjng kd'),
  ('Moull1990', 'Molly', 'This is my THIRD blog, dsnfso fnldsn lsdng ldn kldskng kdng kdsng kdfngfxkjnkdlng jkdng kdn jfdn jnfdkgn jng dkjng dkjng kd'),
  ('Spont1935', 'Spartin', 'This is my FOURTH blog, dsnfso fnldsn lsdng ldn kldskng kdng kdsng kdfngfxkjnkdlng jkdng kdn jfdn jnfdkgn jng dkjng dkjng kd'),
  ('Precand', 'Tracy', 'This is my FIFTH blog, dsnfso fnldsn lsdng ldn kldskng kdng kdsng kdfngfxkjnkdlng jkdng kdn jfdn jnfdkgn jng dkjng dkjng kd')
;

COMMIT;
