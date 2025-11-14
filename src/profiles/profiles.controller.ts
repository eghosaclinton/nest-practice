import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  ParseUUIDPipe,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { ProfilesGuard } from './profiles.guard';
import type { UUID } from 'node:crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  getAllProfiles() {
    return this.profilesService.getProfiles();
  }

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.createProfile(createProfileDto);
  }

  @Get(':id')
  getOneProfile(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.getProfile(id);
  }

  @Put(':id')
  updateProfile(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profilesService.updateProfile(id, updateProfileDto);
  }

  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id', ParseUUIDPipe) id: UUID) {
    this.profilesService.removeProfile(id);
  }
}
