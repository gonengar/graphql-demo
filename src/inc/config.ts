import { app } from './app';

export class Config {

	public static jsonConfig = {
		dev: {
			hosts: ['127.0.0.1', 'localhost'],
			debug: true,
			apiVersion: 'v1.0',
			dateFormat: 'YYYY-MM-DD',
			dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
			tokenSecret: 'devTokenSecret',
			encryptPass: 'devTokenPass',
			db: {
				connectionLimit: 10,
				host: '127.0.0.1',
				user: 'mysql_user',
				password: 'mysql_pass',
				database: 'mysql_db'
			}
		},
		hml: {
			hosts: ['hmlapi.yourdomain.com', '127.0.0.1', 'localhost'],
			debug: true,
			apiVersion: 'v1.0',
			dateFormat: 'YYYY-MM-DD',
			dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
			tokenSecret: 'hmlTokenSecret',
			encryptPass: 'hmlTokenPass',
			db: {
				connectionLimit: 20,
				host: '127.0.0.1',
				user: 'mysql_user',
				password: 'mysql_pass',
				database: 'mysql_db'
			}
		},
		prod: {
			hosts: ['api.yourdomain.com', '127.0.0.1', 'localhost'],
			debug: false,
			apiVersion: 'v1.0',
			dateFormat: 'YYYY-MM-DD',
			dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
			tokenSecret: 'prodTokenSecret',
			encryptPass: 'prodTokenPass',
			db: {
				connectionLimit: 20,
				host: '127.0.0.1:3342',
				user: 'mysql_user',
				password: 'mysql_pass',
				database: 'mysql_db'
			}
		},
	};

	public static getConfig(env?) {
		return this.jsonConfig[env || app.locals.environment];
	};

	public static isValidHost(hostname) {
		return this.jsonConfig[app.locals.environment].hosts.indexOf(hostname) === -1;
	};

}
