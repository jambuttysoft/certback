// src/organizations/organizations.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { Organization } from './organization.entity';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post('register')
  async register(@Body() organization: Partial<Organization>): Promise<Organization> {
    return this.organizationsService.create(organization);
  }

  // Другие маршруты для работы с организациями...
}
