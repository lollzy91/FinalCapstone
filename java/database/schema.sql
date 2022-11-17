BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurant_invite;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users_invite;
DROP TABLE IF EXISTS invites;
DROP SEQUENCE IF EXISTS seq_user_id;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	email varchar(100) NOT NULL UNIQUE,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE restaurant_invite(
    event_id int Not NULL,
    yelp_id varchar Not Null,
    thumbs_up int NOT NULL,
    thumbs_down int NOT NULL

);

CREATE TABLE users_invite(
    event_id int NOT NULL,
    receiver_id int NOT NULL
);

CREATE TABLE invites(
	invite_id serial NOT NULL,
	sender_id int NOT NULL,
	event_date timestamp,
	CONSTRAINT PK_invite PRIMARY KEY (invite_id)
);


INSERT INTO users (username,password_hash, email, role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user@email.com','ROLE_USER');
INSERT INTO users (username,password_hash, email, role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','admin@email.com','ROLE_ADMIN');

COMMIT;
