import { WmPage } from './app.po';

describe('wm App', () => {
  let page: WmPage;

  beforeEach(() => {
    page = new WmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
