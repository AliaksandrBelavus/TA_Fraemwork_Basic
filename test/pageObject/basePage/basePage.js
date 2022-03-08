const logger = require("../../config/logger.config");
const Header = require("./header");

class BasePage {
  constructor() {
    this.Header = new Header();
  }
  open() {
    logger.info(`Opening "${this.url}" url`);
    browser.get(this.url);
  }
}

module.exports = BasePage;
