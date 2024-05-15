import { Injectable, Inject } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('authorRepository')
    private authorRepository: typeof Author,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const author = new Author();
    author.name = createAuthorDto.name;
    return await author.save();
  }

  async findAll() {
    return await this.authorRepository.findAll();
  }

  async findOne(id: number) {
    return await this.authorRepository.findOne({ where: { id } });
  }
}
