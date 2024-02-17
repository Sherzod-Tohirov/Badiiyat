
const CREATE_BOOK = `
insert into book( title,page,year,price,genre_id,author_id,description , image) values ($1, $2 , $3 , $4 , $5 , $6 , $7 , $8)
RETURNING *
`


const GETBOOKBYGENREID = `
    select id, title,page,year,price,genre_id,author_id,description , image from book where genre_id = $1
`

const GETBOOKBYID = `
    select id, title,page,year,price,genre_id,author_id,description , image from book where id = $1
`

const DELETEBOOKBYID = `
    delete from book where id = $1
`
const GETBOOKBYQUERY = `
    select id, title,page,year,price,genre_id,author_id,description , image from book where lower(title) like $1
`

module.exports = {
    CREATE_BOOK,
    GETBOOKBYGENREID,
    GETBOOKBYID,
    DELETEBOOKBYID,
    GETBOOKBYQUERY
}