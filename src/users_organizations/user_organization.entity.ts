// src/users_organizations/user_organization.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserOrganization {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  org_id: number;

  @Column()
  role_id: number;

  @Column({ default: true })
  is_active: boolean;
}
