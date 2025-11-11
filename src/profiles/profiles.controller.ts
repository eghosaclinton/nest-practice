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

@Controller('profiles')
export class ProfilesController {
  @Get()
  getAllProfiles(@Query('location') location: string) {
    return [{ location }];
  }

  @Get(':id')
  getOneProfile(@Param('id') id: number) {
    return { id };
  }

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }

  @Put(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return {
      id,
      ...updateProfileDto,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // eslint-disable-next-line
  deleteProfile(@Param('id') id: string) {
    //delete logic
  }
}
