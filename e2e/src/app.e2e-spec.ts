import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /* it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('angularLife');
  }); */

  it('should display controls', () => {
    page.navigateTo();
    expect(page.getControlsText()).toEqual('Controls');
  });

  it('should display a toolbar', () => {
    // page.navigateTo();
    expect(page.getToolbar()).toBeTruthy();
  });
});
