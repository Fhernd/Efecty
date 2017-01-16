import { EfectyPage } from './app.po';

describe('efecty App', function() {
  let page: EfectyPage;

  beforeEach(() => {
    page = new EfectyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iz works!');
  });
});
