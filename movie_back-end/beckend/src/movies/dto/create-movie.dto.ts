import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  viewers: number;

  @IsBoolean()
  favourite: boolean;

  @IsBoolean()
  like: boolean;
}
