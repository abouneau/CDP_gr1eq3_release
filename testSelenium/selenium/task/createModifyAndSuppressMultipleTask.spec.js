// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreateModifyAndSuppressMultipleTask', function() {
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
  it('CreateModifyAndSuppressMultipleTask', async function() {
    await driver.get("http://localhost:4321/signIn")
    await driver.setRect(1295, 695)
    await driver.findElement(By.name("email")).sendKeys("nicolas.duroc@etu.u-bordeaux.fr")
    await driver.findElement(By.name("password")).sendKeys("abcdefgh")
    await driver.findElement(By.name("password")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("testing")).click()
    await driver.findElement(By.linkText("Tâches")).click()
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id1")
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id")
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).sendKeys("1h")
    await driver.findElement(By.id("dependencies")).sendKeys("dep")
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.id("assignedDeveloper")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Backlog")).click()
    await driver.findElement(By.linkText("Nouvelle issue")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id")
    await driver.findElement(By.id("name")).sendKeys("name")
    await driver.findElement(By.id("priority")).sendKeys("5")
    await driver.findElement(By.id("difficulty")).sendKeys("5")
    await driver.findElement(By.id("difficulty")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Nouvelle issue")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id1")
    await driver.findElement(By.id("name")).sendKeys("name")
    await driver.findElement(By.id("priority")).sendKeys("5")
    await driver.findElement(By.id("difficulty")).sendKeys("5")
    await driver.findElement(By.id("difficulty")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Nouvelle issue")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id2")
    await driver.findElement(By.id("name")).sendKeys("name1")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("En tant que ..., Je Peux ..., Afin de test")
    await driver.findElement(By.id("priority")).sendKeys("6")
    await driver.findElement(By.id("difficulty")).sendKeys("3")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Backlog")).click()
    await driver.findElement(By.linkText("Tâches")).click()
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id1")
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).sendKeys("2h")
    await driver.findElement(By.id("dependencies")).sendKeys("dep")
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("assignedDeveloper")).click()
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.id("assignedDeveloper")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id2")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).click()
    await driver.findElement(By.id("estimatedTime")).sendKeys("1h")
    await driver.findElement(By.id("dependencies")).click()
    await driver.findElement(By.id("dependencies")).sendKeys("dep")
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id2']")).click()
    }
    await driver.findElement(By.css("option:nth-child(4)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("assignedDeveloper")).click()
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id3")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).click()
    await driver.findElement(By.id("estimatedTime")).sendKeys("4h")
    await driver.findElement(By.id("dependencies")).click()
    await driver.findElement(By.id("dependencies")).sendKeys("dep")
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id1']")).click()
    }
    await driver.findElement(By.css("option:nth-child(3)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("assignedDeveloper")).click()
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id4")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).click()
    await driver.findElement(By.id("estimatedTime")).sendKeys("1h")
    await driver.findElement(By.id("dependencies")).click()
    await driver.findElement(By.id("dependencies")).sendKeys("dep")
    await driver.findElement(By.css("html")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id1']")).click()
    }
    await driver.findElement(By.css("option:nth-child(3)")).click()
    await driver.findElement(By.id("issueList")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("assignedDeveloper")).click()
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.linkText("Nouvelle tâche")).click()
    await driver.findElement(By.id("idInput")).click()
    await driver.findElement(By.id("idInput")).sendKeys("id5")
    await driver.findElement(By.id("description")).sendKeys("desc")
    await driver.findElement(By.id("estimatedTime")).sendKeys("2h")
    await driver.findElement(By.id("dependencies")).sendKeys("dep2")
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id1']")).click()
    }
    await driver.findElement(By.css("option:nth-child(3)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id2']")).click()
    }
    await driver.findElement(By.css("option:nth-child(4)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("assignedDeveloper")).click()
    await driver.findElement(By.id("assignedDeveloper")).sendKeys("dev")
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css(".media:nth-child(5) > .btn")).click()
    await driver.findElement(By.id("advancementState")).click()
    {
      const dropdown = await driver.findElement(By.id("advancementState"))
      await dropdown.findElement(By.xpath("//option[. = 'Terminée']")).click()
    }
    await driver.findElement(By.css("#advancementState > option:nth-child(3)")).click()
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id1']")).click()
    }
    await driver.findElement(By.css("#issueList > option:nth-child(3)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css(".media:nth-child(11) > .btn")).click()
    await driver.findElement(By.id("advancementState")).click()
    {
      const dropdown = await driver.findElement(By.id("advancementState"))
      await dropdown.findElement(By.xpath("//option[. = 'En cours']")).click()
    }
    await driver.findElement(By.css("#advancementState > option:nth-child(2)")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css(".media:nth-child(7) > .btn")).click()
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("desc12")
    await driver.findElement(By.id("issueList")).click()
    {
      const dropdown = await driver.findElement(By.id("issueList"))
      await dropdown.findElement(By.xpath("//option[. = 'id']")).click()
    }
    await driver.findElement(By.css("#issueList > option:nth-child(2)")).click()
    await driver.findElement(By.css(".form-group > button")).click()
    await driver.findElement(By.id("advancementState")).click()
    {
      const dropdown = await driver.findElement(By.id("advancementState"))
      await dropdown.findElement(By.xpath("//option[. = 'En cours']")).click()
    }
    await driver.findElement(By.css("#advancementState > option:nth-child(2)")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css(".media:nth-child(5) > form > .btn")).click()
    await driver.findElement(By.css(".media:nth-child(3) > form > .btn")).click()
    await driver.findElement(By.css(".media:nth-child(5) > form > .btn")).click()
    await driver.findElement(By.css(".media:nth-child(5) > form > .btn")).click()
    await driver.findElement(By.css(".media:nth-child(5) > form > .btn")).click()
    await driver.findElement(By.css(".btn-danger")).click()
    await driver.findElement(By.linkText("Backlog")).click()
    await driver.findElement(By.css(".media:nth-child(3) .btn-danger")).click()
    await driver.findElement(By.css(".media:nth-child(5) .btn-danger")).click()
    await driver.findElement(By.css(".btn-danger")).click()
  })
})
