import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';



const accountKey = "vOKsJURwIaX5XhMSRe5U68275UvV0Cw7GM2FSQg9wkQI8yPS3khPx8F2K2jPFQQhxPwSZpfFaRVQACDbOIpZPA==";
const encodedAccountKey = encodeURIComponent(accountKey);

const config = {
  name: "CosmosDB",
  connector: "mongodb",
  url: `mongodb://cosmos-db-realestate-app-1:${encodedAccountKey}@cosmos-db-realestate-app-1.documents.azure.com:10255/Realestate-DEV?ssl=true&replicaSet=globaldb`
}
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UsersDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Users';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Users', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
