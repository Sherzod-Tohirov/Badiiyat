// const pgConfig = {
// 	host: process.env.DB_HOST,
// 	port: process.env.DB_PORT,
// 	user:process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME
// }

const pgConfig = {
	host: 'localhost',
	port: 5432,
	user:'postgres',
	password: '010203',
	database: 'book'
}

const options = {
	definition:{
		openapi:'3.0.1',
		info:{
			title:'Node js api Books',
			version:'1.0.0'
		},
		servers:[
			{
				url:'http://localhost:5000/'
			}
		],
		
	},
	apis:['./routes']
}

module.exports = {
    pgConfig,
	options
}