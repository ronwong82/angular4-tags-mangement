import { TrackerPage } from './app.po';

describe('tracker App', () => {
  let page: TrackerPage;

  beforeEach(() => {
    page = new TrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
