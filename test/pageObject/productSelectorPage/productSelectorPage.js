const logger = require("../../config/logger.config");
const BasePage = require("../basePage/basePage");
const Element = require("../baseElements/baseElements");

class ProductSelectorPage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.apc.com/us/en/support/resources-tools/product-selectors.jsp";
    this.UPSSelector = new Element("xpath", "//a[@href='https://www.apc.com/shop/us/en/tools/ups_selector/']");
    this.ConfigureByLoadButton = new Element("xpath", "//div[@id='app']//button[1]");
    this.HomeEnvironmentRadio = new Element("css", "div[class='SeRadio_seRadioCustomButton__3TTTv']");
    this.TotalPowerInput = new Element("xpath", "//div[@class='SeRangeInput_input__FG9Pb TotalLoad_rangeInput__15hX-']/input[1]");
    this.TotalPowerLabel = new Element("xpath", "//span[@class='TotalPowerDraw_values__lPanF']");
  }
  clickUPSSelector() {
    logger.info(`Clicking "UPSSelector"`);
    this.UPSSelector.click();
  }
  clickConfigureByLoadButton() {
    logger.info(`Clicking "Configure by Load Button"`);
    this.ConfigureByLoadButton.click();
  }
  clickHomeEnvironmentRadio() {
    logger.info(`Select "Home Environment Radiobutton"`);
    this.HomeEnvironmentRadio.click();
  }
  sendKeysToTotalPowerInput(text) {
    this.TotalPowerInput.sendKeys(text);
  }
}

const productSelectorPage = new ProductSelectorPage();
module.exports = productSelectorPage;

