import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';



const config = {
  name: "CosmosDB",
  connector: "mongodb",
  url: `mongodb://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS ?? '')}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=${process.env.DB_SSL}&replicaSet=${process.env.DB_REPLICA_SET}`,
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
    console.log(dsConfig);
  }
}
