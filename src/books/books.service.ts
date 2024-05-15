import { Injectable, Inject } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';
import { Op } from 'sequelize';

@Injectable()
export class BooksService {
  constructor(
    @Inject('bookRepository')
    private bookRepository: typeof Book,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = new Book();
    book.title = createBookDto.title;
    book.authorId = createBookDto.authorId; 
    return await book.save();
  }

  async findAll(title?: string, authorId?: number) {
    if (title)
      return await this.bookRepository.findAll({
        where: {
          [Op.or]: [{ title: { [Op.like]: `%${title}%` } }],
        },
      });
    if (authorId)
      return await this.bookRepository.findAll({ where: { authorId } });
    return await this.bookRepository.findAll();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.bookRepository.destroy({ where: { id } });
  }
}
