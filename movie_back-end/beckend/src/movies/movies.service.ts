import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Movies } from './movies.model';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movies) private readonly movieModel: typeof Movies,
  ) {}
  create(createMovieDto: CreateMovieDto): Promise<Movies> {
    return this.movieModel.create(createMovieDto);
  }

  async findAll() {
    return await this.movieModel.findAll();
  }

  async findOne(id: number) {
    const movie = await this.movieModel.findByPk(id);

    if (!movie) {
      throw new Error(`Movie with id ${id} not found`);
    }

    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieModel.findByPk(id);

    if (!movie) {
      throw new Error(`Movie with id ${id} not found`);
    }

    await movie.update(updateMovieDto);
    return movie;
  }

  async remove(id: number) {
    const movie = await this.findOne(id);

    if (!movie) {
      throw new Error(`Movie with id ${id} not found`);
    }

    return movie.destroy();
  }
}
