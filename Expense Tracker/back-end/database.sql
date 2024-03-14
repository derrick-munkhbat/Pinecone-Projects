create table users (
    email VARCHAR(21)
    password TEXT
)
create table categories (
    id: VARCHARD(21) PRIMARY KEY,
    name: VARCHARD(55)

)

create table transactions (
    id: VARCHARD(21),
    amount: MONEY,
    date: TIMESTAMP,
    category_id: VARCHARD(21) FOREIGN KEY REFENCES categories(id)
)


insert into categories VALUES ('1', 'Food & Drinks');


