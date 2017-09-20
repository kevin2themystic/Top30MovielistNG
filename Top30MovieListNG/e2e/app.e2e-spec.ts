import { Top30MovieListNGPage } from './app.po';

describe('top30-movie-list-ng App', () => {
  let page: Top30MovieListNGPage;

  beforeEach(() => {
    page = new Top30MovieListNGPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
