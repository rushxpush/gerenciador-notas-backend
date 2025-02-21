import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from '../notes.controller';
import { NotesService } from '../notes.service';
import { CreateNoteDto } from '../dto/create-note.dto';

describe('NotesController', () => {
  let controller: NotesController;
  let service: NotesService;

  const dto: CreateNoteDto = {
    title: 'Note 1 title',
    content: 'Note 1 content',
  };

  const expectedResponse = {
    _id: '1',
    ...dto,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    controller = module.get<NotesController>(NotesController);
    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new note and return the created note from the database', async () => {
      jest.spyOn(service, 'create').mockResolvedValue(expectedResponse);

      const response = await controller.create(dto);

      expect(response).toEqual(expectedResponse);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return all notes from the database', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResponse);

      const response = await controller.findAll();

      expect(response).toEqual(expectedResponse);
    });
  });
});
