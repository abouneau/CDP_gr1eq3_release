// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreateIssueFailDifficulty', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CreateIssueFailDifficulty', async function() {
    await driver.get("http://localhost:4321/signIn")
    await driver.setRect(550, 618)
    await driver.findElement(By.name("email")).sendKeys("nicolas.duroc@etu.u-bordeaux.fr")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("abcdefgh")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.linkText("testing")).click()
    await driver.findElement(By.linkText("Backlog")).click()
    await driver.findElement(By.linkText("Nouvelle issue")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id")
    await driver.findElement(By.id("name")).sendKeys("name")
    await driver.findElement(By.id("priority")).sendKeys("5")
    await driver.findElement(By.css(".btn-primary")).click()
  })
})
