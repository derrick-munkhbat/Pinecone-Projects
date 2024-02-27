CREATE TABLE tasks (
    id BIGINT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    createdAt DATE
);

DESC tasks1;

select * from tasks

select title, id from tasks

select title from tasks

insert into tasks values(5, 'shalaa ugaah');

insert into tasks values(5, 'toosoo soruul ugaah');

delete from tasks where  id = 5;

update tasks set title = 'Ayagaa ugaah' where id = 6;