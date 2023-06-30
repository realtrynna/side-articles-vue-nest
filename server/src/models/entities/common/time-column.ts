import {
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

type TTime = string | Date;

export class TimeColumn extends BaseEntity {
    @CreateDateColumn()
    createdAt: TTime;

    @UpdateDateColumn()
    updatedAt: TTime;

    @DeleteDateColumn()
    deletedAt: TTime;
}
