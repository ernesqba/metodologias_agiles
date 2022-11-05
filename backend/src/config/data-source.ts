import { DataSource } from 'typeorm'

import * as typeOrmConfig from './typeorm.config'

const dataSource = new DataSource(typeOrmConfig)

export default dataSource
