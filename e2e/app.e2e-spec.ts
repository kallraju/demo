import { DemoCrudPage } from './app.po';

describe('demo-crud App', function() {
  let page: DemoCrudPage;

  beforeEach(() => {
    page = new DemoCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
