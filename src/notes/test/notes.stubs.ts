import { CreateNoteDto } from '../dto/create-note.dto';

export const createDtoStub: CreateNoteDto = {
  title: 'Note 1 title',
  content: 'Note 1 content',
};

export const expectedCreateResponseStub = {
  _id: '1',
  __v: 0,
  ...createDtoStub,
};

export const expectedFindAllResponseStub = [
  {
    _id: '1',
    __v: 0,
    ...createDtoStub,
  },
];
