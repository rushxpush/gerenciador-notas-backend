import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './entities/note.entity';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<any> {
    return this.noteModel.create(createNoteDto);
  }

  async findAll(): Promise<any> {
    return this.noteModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
