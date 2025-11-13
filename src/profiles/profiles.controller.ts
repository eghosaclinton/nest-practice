import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
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
  getOneProfile(@Param('id') id: string) {
    return this.profilesService.getProfile(id);
  }

  @Put(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profilesService.updateProfile(id, updateProfileDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id') id: string) {
    this.profilesService.removeProfile(id);
  }
}
