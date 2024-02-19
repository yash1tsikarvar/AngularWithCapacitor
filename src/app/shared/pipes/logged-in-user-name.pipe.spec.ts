import {LoggedInUserNamePipe} from './logged-in-user-name.pipe';

describe('LoggedInUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new LoggedInUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
