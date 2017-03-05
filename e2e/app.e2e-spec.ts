import { AluecoPage } from './app.po';

describe('alueco App', function() {
  let page: AluecoPage;

  beforeEach(() => {
    page = new AluecoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
