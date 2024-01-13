import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from '@app/profile/profile.service';
import { User } from '@app/user/decorators/user.decorator';
import { UserEntity } from '@app/user/user.entity';
import { ProfileResponseInterface } from '@app/profile/types/profileResponse.interface';
import { ProfileType } from '@app/profile/types/profile.type';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':username')
  async getUserProfile(
    @User('id') currentUserId: number,
    @Param('username') username: string,
  ): Promise<ProfileResponseInterface> {
    const user: ProfileType = await this.profileService.getProfile(
      currentUserId,
      username,
    );
    return this.profileService.buildProfileResponse(user);
  }
}
