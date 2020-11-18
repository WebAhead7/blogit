BEGIN;
DROP TABLE IF EXISTS ourdata CASCADE;

CREATE TABLE ourdata (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  myname VARCHAR(255) NOT NULL,
  post TEXT NOT NULL
);

INSERT INTO ourdata (username, myname, post) VALUES
  ('Sery1976', 'Serya', 'This is my FIRST blog, testttt1'),
  ('Notne1991', 'Nathan', 'This is my SECOND blog, testttt2'),
  ('Moull1990', 'Molly', 'This is my THIRD blog, testttt3'),
  ('Spont1935', 'Spartin', 'This is my FOURTH blog, testttt4'),
  ('Precand', 'Tracy', 'This is my FIFTH blog, testttt5')
;

COMMIT;
