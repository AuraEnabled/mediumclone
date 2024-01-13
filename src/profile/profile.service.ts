import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { UserEntity } from '@app/user/user.entity';
import { Repository } from 'typeorm';
import { ProfileResponseInterface } from '@app/profile/types/profileResponse.interface';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getProfile(currentUserId: number, username: string): Promise<any> {
    const requestedUser = await this.userRepository.findOne({
      where: { username: username },
      select: ['username', 'bio', 'image'],
    });

    return requestedUser;
  }

  buildProfileResponse(profile: UserEntity): ProfileResponseInterface {
    return { profile };
  }
}
