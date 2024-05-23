create user 'pedro'@'localhost' IDENTIFIED BY 'SENAI1234';

GRANT ALL privileges ON *.* TO 'pedro'@'localhost';

FLUSH PRIVILEGES;

use login;

create table user (
idUser INT(11) NOT NULL,
username varchar(20) not null,
password varchar(20) not null
);

Insert into user values (1, 'pedro', 'SENAI1234');

select * from user;