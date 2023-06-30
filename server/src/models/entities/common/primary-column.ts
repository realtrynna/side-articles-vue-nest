import { PrimaryGeneratedColumn } from 'typeorm';

import { TimeColumn } from './time-column';

export class PrimaryColumn extends TimeColumn {
    @PrimaryGeneratedColumn()
    id: number;
}
