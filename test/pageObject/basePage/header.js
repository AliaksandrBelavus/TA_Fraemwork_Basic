const logger = require("../../config/logger.config");
const Element = require("../baseElements/baseElements");

class Header {
  constructor() {
    this.supportButton = new Element("xpath", '//*[@id="apc-megamenu"]/li[3]/a');
    this.productSelectorButton = new Element("xpath", "//a[contains(text(),'Product Selectors')]"
    );
  }
  clickSupport() {
    logger.info(`Clicking "Support Button"`);
    this.supportButton.click();
  }
  clickProductSelector() {
    logger.info(`Clicking "Product Selectors Button"`);
    this.productSelectorButton.click();
  }
}

module.exports = Header;