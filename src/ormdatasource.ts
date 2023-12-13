import { DataSource } from 'typeorm';
import ormconfig from '@app/ormconfig';

const dataSource = new DataSource(ormconfig);
export default dataSource;
