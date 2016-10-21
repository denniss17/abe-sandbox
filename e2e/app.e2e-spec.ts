import { AbeSandboxPage } from './app.po';

describe('abe-sandbox App', function() {
  let page: AbeSandboxPage;

  beforeEach(() => {
    page = new AbeSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
