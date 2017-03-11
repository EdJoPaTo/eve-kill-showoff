import { EveKillShowoffPage } from './app.po';

describe('eve-kill-showoff App', () => {
  let page: EveKillShowoffPage;

  beforeEach(() => {
    page = new EveKillShowoffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
