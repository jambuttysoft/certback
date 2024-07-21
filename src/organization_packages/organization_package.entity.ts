// src/organization_packages/organization_package.entity.ts
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class OrganizationPackage {
  @PrimaryColumn()
  org_id: number;

  @PrimaryColumn()
  package_id: number;

  @CreateDateColumn()
  start_date: Date;

  @CreateDateColumn()
  end_date: Date;

  @Column({ default: true })
  is_active: boolean;
}
