import { JCrudPage } from './app.po';

describe('j-crud App', function() {
  let page: JCrudPage;

  beforeEach(() => {
    page = new JCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
