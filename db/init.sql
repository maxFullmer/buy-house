DROP TABLE IF EXISTS houseList;

CREATE TABLE houseList(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zipcode INTEGER,
    image TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houseList
(name, address, city, state, zipcode, image, mortgage, rent)
VALUES
('Louie', '1425 Grassy Lane', 'Jacksonville', 'FL', 14234, 'https://www.theplancollection.com/Upload/Designers/107/1068/Plan1071068MainImage_5_4_2018_11.jpg', 600000.00, 1000.00);

INSERT INTO houseList
(name, address, city, state, zipcode, image, mortgage, rent)
VALUES
('Florida Man', '1337 Sandstorm Drive', 'Cape Canaveral', 'FL', 14234, 'https://m.wsj.net/video/20180315/032018lotd_boca/032018lotd_boca_1280x720.jpg', 400000.00, 1000.25);


SELECT * FROM houseList;