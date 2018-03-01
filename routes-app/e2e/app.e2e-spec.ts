import { RoutesAppPage } from './app.po';

describe('routes-app App', () => {
  let page: RoutesAppPage;

  beforeEach(() => {
    page = new RoutesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
