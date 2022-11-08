BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;
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
	email varchar(100) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);
/*
    Each available restaurant includes the name, the type of establishment, an address, and the hours of operation.
*/
CREATE TABLE restaurants(
    restaurant_id serial NOT NULL,
	yelp_id varchar,
    restaurant_name varchar NOT NULL,
    categories varchar,
    address varchar NOT NULL,
    open_hour time,
    close_hour time,
    phone varchar

);

CREATE TABLE invites(
	invite_id int NOT NULL,
	sender_id int NOT NULL,
	receiver_id int NOT NULL,
	event_date timestamp
);


INSERT INTO users (username,password_hash, email, role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user@email.com','ROLE_USER');
INSERT INTO users (username,password_hash, email, role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','admin@email.com','ROLE_ADMIN');
INSERT INTO restaurants(restaurant_name, categories, address, open_hour, close_hour, phone)
VALUES ('Food Place', 'Food','123 Food St', '08:00', '20:00', '1234567890');
INSERT INTO invites(invite_id, sender_id, receiver_id, event_date) VALUES (1,1,2, '2022-11-09');
COMMIT TRANSACTION;