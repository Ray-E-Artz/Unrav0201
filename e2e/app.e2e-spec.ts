import { Unrav0201Page } from './app.po';

describe('unrav0201 App', function() {
  let page: Unrav0201Page;

  beforeEach(() => {
    page = new Unrav0201Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
