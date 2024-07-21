// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  fname: string;

  @Column({ length: 50 })
  lname: string;

  @Column({ length: 50, nullable: true })
  mname: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 250 })
  password: string;

  @CreateDateColumn()
  regdate: Date;

  @Column({ default: true })
  is_active: boolean;
}
