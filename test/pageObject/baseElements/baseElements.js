const logger = require("../../config/logger.config");

class Element {
  constructor(selectorType, selector) {
    if (selectorType === "css") {
      this.element = element(by.css(selector));
    } else {
      this.element = element(by.xpath(selector));
    }
  }
  click() {
    this.element.click();
  }
  async getText() {
    const elementText = await this.element.getText();
    logger.info(`Text of element "${this.element}" is [${elementText}]`);
    return elementText;
  }

  sendKeys(text) {
    logger.info(`Sent to "${this.element}" text [${text}]`);
    this.element.sendKeys(text);
  }
}

module.exports = Element;