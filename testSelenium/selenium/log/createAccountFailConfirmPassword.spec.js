// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreateAccountFailConfirmPassword', function() {
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
  it('CreateAccountFailConfirmPassword', async function() {
    await driver.get("http://localhost:4321/signIn")
    await driver.setRect(550, 680)
    await driver.findElement(By.linkText("S\'inscrire")).click()
    await driver.findElement(By.name("email")).sendKeys("testerror@test")
    await driver.findElement(By.name("username")).sendKeys("testerror")
    await driver.findElement(By.name("password")).sendKeys("testtest")
    await driver.findElement(By.css(".btn")).click()
  })
})
