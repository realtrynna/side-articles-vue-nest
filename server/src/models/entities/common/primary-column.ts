import { PrimaryGeneratedColumn } from 'typeorm';

import { CreateTimeColumn } from './create-time-column';

export class PrimaryColumn extends CreateTimeColumn {
    @PrimaryGeneratedColumn()
    id: number;
}
