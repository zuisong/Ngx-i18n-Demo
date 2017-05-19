import { Ng2I18nDemoPage } from './app.po';

describe('ng2-i18n-demo App', () => {
  let page: Ng2I18nDemoPage;

  beforeEach(() => {
    page = new Ng2I18nDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
