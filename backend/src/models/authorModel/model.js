
const CREATE_AUTHOR = `
insert into author( first_name , last_name , date_of_birth ,date_of_death  ,  country ,   bio , image , genre_id) values ($1, $2 , $3 , $4 , $5 , $6 , $7 , $8)
RETURNING *
`

const GENRE = `
    select * from genre where id = $1
`
const GETAUTHORBYGENREID = `
    select id, first_name , last_name , date_of_birth ,date_of_death  ,  country ,   bio , image from author where genre_id = $1
`

const GETAUTHORBYID = `
    select id, first_name , last_name , date_of_birth ,date_of_death  ,  country ,   bio , image from author where id = $1
`

const DELETEAUTHORBYID = `
    delete from author where id = $1
`

const GETAUTHORBOOK = `
    select id, title,page,year,price,genre_id,author_id,description , image from book where author_id = $1
`

const GETAUTHORLIKE = `
    select id, first_name , last_name , date_of_birth ,date_of_death , country , bio , image from author where lower(first_name || ' ' || last_name) like $1
`

module.exports = {
    CREATE_AUTHOR,
    GENRE,
    GETAUTHORBYGENREID,
    GETAUTHORBYID,
    DELETEAUTHORBYID,
    GETAUTHORBOOK,
    GETAUTHORLIKE
}