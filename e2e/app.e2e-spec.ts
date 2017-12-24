import { MyCoinbaseApiTestPage } from './app.po';

describe('my-coinbase-api-test App', () => {
  let page: MyCoinbaseApiTestPage;

  beforeEach(() => {
    page = new MyCoinbaseApiTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
