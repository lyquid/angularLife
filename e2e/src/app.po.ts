import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getOptionsText() {
    return element(by.className('mat-toolbar mat-toolbar-single-row')).getText();
  }

  getToolbar() {
    return element(by.className('mat-toolbar-row')).getText();
  }
}


