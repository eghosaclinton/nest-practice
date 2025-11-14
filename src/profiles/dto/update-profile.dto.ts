import { IsString, Length, Contains } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  @Contains('software')
  description: string;
}
