const expect = require("chai").use(require("chai-as-promised")).expect;

const HomePage = require("../pages/home");
const homePage = new HomePage();

Given("that it is on the homepage of Mercado Livre", async function() {
  await homePage.visit("/");
});

When("I search for {string}", async function(item) {
  await homePage.searchItem(item);
});

Then("I view items according to my search", async function() {
  await expect(homePage.getTextResult()).to.eventually.equal("Golf");
});
