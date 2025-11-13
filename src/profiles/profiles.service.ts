import { Injectable } from '@nestjs/common';
import type { Profile } from './types/profile';
import type { CreateProfileDto } from './dto/create-profile.dto';
import { randomUUID } from 'node:crypto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`,
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`,
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`,
    },
  ];
  getProfiles() {
    return this.profiles;
  }

  getProfile(id: string) {
    return this.profiles.find((profile) => profile.id == id);
  }

  createProfile(newProfile: CreateProfileDto) {
    const newLength = this.profiles.push({ id: randomUUID(), ...newProfile });

    return this.profiles[newLength - 1];
  }

  updateProfile(id: string, newInfo: UpdateProfileDto) {
    const index = this.profiles.findIndex((profile) => profile.id == id);

    if (index === -1) {
      return {};
    }

    //we will handle exceptions later (like when profile is undefined)
    return (this.profiles[index] = {
      ...this.profiles[index],
      ...newInfo,
    });
  }

  removeProfile(id: string) {
    this.profiles = this.profiles.filter((profile) => profile.id !== id);
  }
}
