import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('userRepository')
    private userRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isExist = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (isExist)
      throw new BadRequestException(
        'Пользователь с такой почтой уже зарегистрирован',
      );
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    return await user.save();
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }
}
