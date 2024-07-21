// src/organizations/organizations.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationsRepository: Repository<Organization>,
  ) {}

  async create(organization: Partial<Organization>): Promise<Organization> {
    const existingOrganizationByName = await this.organizationsRepository.findOne({ where: { name: organization.name } });
    if (existingOrganizationByName) {
      throw new BadRequestException('Organization with this name already exists');
    }

    const existingOrganizationByEmail = await this.organizationsRepository.findOne({ where: { contact_email: organization.contact_email } });
    if (existingOrganizationByEmail) {
      throw new BadRequestException('Organization with this email already exists');
    }

    const existingOrganizationByTIN = await this.organizationsRepository.findOne({ where: { tin: organization.tin } });
    if (existingOrganizationByTIN) {
      throw new BadRequestException('Organization with this TIN already exists');
    }

    const newOrganization = this.organizationsRepository.create(organization);
    return this.organizationsRepository.save(newOrganization);
  }

  // Другие методы для работы с организациями...
}
