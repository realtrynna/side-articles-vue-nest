import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { PrimaryColumn } from 'src/models/entities/common/primary-column';

@Entity({ name: 'user' })
export class UserEntity extends PrimaryColumn {
    @Column('varchar', { unique: true, length: 100 })
    email: string;

    @Column('varchar', { length: 10 })
    name: string;

    @Column('varchar')
    password: string;

    @Column('varchar', { length: 20 })
    phone: string;

    @Column('text', { nullable: true })
    profileImage: string;
}
