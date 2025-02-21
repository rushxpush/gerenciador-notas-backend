import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from '../notes.controller';
import { NotesService } from '../notes.service';
import { CreateNoteDto } from '../dto/create-note.dto';
import {
  createDtoStub,
  expectedCreateResponseStub,
  expectedFindAllResponseStub,
} from './notes.stubs';

describe('NotesController', () => {
  let controller: NotesController;
  const mockNotesService = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  const createNoteDto: CreateNoteDto = createDtoStub;
  const expectedCreateResponse = expectedCreateResponseStub;
  const expectedFindAllResponse = expectedFindAllResponseStub;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [
        {
          provide: NotesService,
          useValue: mockNotesService,
        },
      ],
    }).compile();

    controller = module.get<NotesController>(NotesController);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new note and return the created note from the database', async () => {
      mockNotesService.create.mockResolvedValue(expectedCreateResponse);

      const response = await controller.create(createNoteDto);

      expect(response).toEqual(expectedCreateResponse);
      expect(mockNotesService.create).toHaveBeenCalledWith(createNoteDto);
    });
  });

  describe('findAll', () => {
    it('should return all notes from the database', async () => {
      mockNotesService.findAll.mockResolvedValue(expectedFindAllResponse);

      const response = await controller.findAll();

      expect(response).toEqual(expectedFindAllResponse);
      expect(mockNotesService.findAll).toHaveBeenCalledWith();
    });
  });
});
