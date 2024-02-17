const FINDONE = `
    select id , first_name , last_name , phone , email , password from users where email = $1;
`   

const CREATE_USER = `
insert into users( first_name , last_name , phone ,  email ,   password) values ($1, $2 , $3 , $4 , $5)
RETURNING *
`

const GETCURRENTUSER = `
    select id ,first_name , last_name , phone , email, image from users where id = $1 
`

const UPDATECURRENTUSERACCOUNT = `
    update users set first_name = $1 , 
    last_name = $2 , phone = $3, image =$4 where id = $5
`

const FIND = `
    select * from users where id <> $1 and email = $2
`

const FINDP = `
select * from users where id = $1
`


const UPDATESECURITY = `
    update users set password = $2 , email=$3 where id = $1
`
module.exports = {
    FINDONE,
    CREATE_USER,
    GETCURRENTUSER,
    UPDATECURRENTUSERACCOUNT,
    FIND,
    UPDATESECURITY,
    FINDP
}