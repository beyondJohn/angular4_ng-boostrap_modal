import { Angular4bootstrap4modalPage } from './app.po';

describe('angular4bootstrap4modal App', () => {
  let page: Angular4bootstrap4modalPage;

  beforeEach(() => {
    page = new Angular4bootstrap4modalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
