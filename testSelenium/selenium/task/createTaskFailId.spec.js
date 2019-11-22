// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreateTaskFailId', function() {
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
  it('CreateTaskFailId', async function() {
    await driver.get("http://localhost:4321/signIn")
    await driver.setRect(1295, 695)
    await driver.findElement(By.name("email")).sendKeys("nicolas.duroc@etu.u-bordeaux.fr")
    await driver.findElement(By.name("password")).sendKeys("abcdefgh")
    await driver.findElement(By.name("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("testing")).click()
    await driver.findElement(By.linkText("Tâches")).click()
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).sendKeys("1h")
    await driver.findElement(By.id("dependencies")).sendKeys("dep")
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.css(".btn-primary")).click()
  })
})
