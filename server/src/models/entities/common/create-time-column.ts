import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

type TTime = Date;

export class CreateTimeColumn extends BaseEntity {
    @CreateDateColumn()
    createdAt: TTime;

    @UpdateDateColumn()
    updatedAt: TTime;
}
