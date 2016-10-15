import { WhiskeyNotesPage } from './app.po';

describe('whiskey-notes App', function() {
  let page: WhiskeyNotesPage;

  beforeEach(() => {
    page = new WhiskeyNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
