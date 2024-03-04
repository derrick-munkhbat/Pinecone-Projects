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


