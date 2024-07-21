// src/organizations/organization.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
@Unique(['contact_email'])
@Unique(['tin'])
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 250 })
  address: string;

  @Column({ length: 100 })
  contact_email: string;

  @Column({ length: 20 })
  contact_phone: string;

  @Column({ length: 20 })
  tin: string;  // Добавление поля TIN

  @CreateDateColumn()
  creation_date: Date;

  @Column({ default: true })
  is_active: boolean;
}
