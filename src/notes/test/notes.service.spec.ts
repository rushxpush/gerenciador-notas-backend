import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from '../notes.service';
import { getModelToken } from '@nestjs/mongoose';
import { Note } from '../entities/note.entity';
import {
  createDtoStub,
  expectedCreateResponseStub,
  expectedFindAllResponseStub,
} from './notes.stubs';
import { CreateNoteDto } from '../dto/create-note.dto';

describe('NotesService', () => {
  let service: NotesService;

  const mockNoteModel = {
    create: jest.fn(),
    find: jest.fn(),
  };

  const createNoteDto: CreateNoteDto = createDtoStub;
  const expectedCreateResponse = expectedCreateResponseStub;
  const expectedFindAllResponse = expectedFindAllResponseStub;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        {
          provide: getModelToken(Note.name),
          useValue: mockNoteModel,
        },
      ],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a note in the database and return the created note', async () => {
      mockNoteModel.create.mockResolvedValue(expectedCreateResponse);

      const response = await service.create(createNoteDto);

      expect(response).toEqual(expectedCreateResponse);
      expect(mockNoteModel.create).toHaveBeenCalledWith(createNoteDto);
    });

    it('should return all notes from the database', async () => {
      mockNoteModel.find.mockResolvedValue(expectedFindAllResponse);

      const response = await service.findAll();

      expect(response).toEqual(expectedFindAllResponse);
      expect(mockNoteModel.find).toHaveBeenCalledWith();
    });
  });
});
