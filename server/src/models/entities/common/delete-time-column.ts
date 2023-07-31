import { BaseEntity, DeleteDateColumn } from 'typeorm';

type TTime = Date;

export class DeleteTimeColumn extends BaseEntity {
    @DeleteDateColumn()
    deletedAt: TTime;
}
