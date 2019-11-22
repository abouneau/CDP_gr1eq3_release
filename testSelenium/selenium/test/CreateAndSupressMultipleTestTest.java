// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
public class CreateAndSupressMultipleTestTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new FirefoxDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void createAndSupressMultipleTest() {
    driver.get("http://localhost:4321/signIn");
    driver.manage().window().setSize(new Dimension(550, 680));
    driver.findElement(By.name("email")).sendKeys("nicolas.duroc@etu.u-bordeaux.fr");
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).sendKeys("abcdefgh");
    driver.findElement(By.cssSelector(".btn")).click();
    driver.findElement(By.linkText("testing")).click();
    driver.findElement(By.linkText("Tests")).click();
    driver.findElement(By.linkText("Nouveau test")).click();
    driver.findElement(By.id("name")).click();
    driver.findElement(By.id("name")).sendKeys("test");
    driver.findElement(By.cssSelector("html")).click();
    driver.findElement(By.id("description")).click();
    driver.findElement(By.id("description")).sendKeys("Etant donné test , Lorsque test , Alors test");
    driver.findElement(By.cssSelector(".btn-primary")).click();
    driver.findElement(By.linkText("Nouveau test")).click();
    driver.findElement(By.id("name")).click();
    driver.findElement(By.id("name")).sendKeys("test");
    driver.findElement(By.cssSelector("html")).click();
    driver.findElement(By.id("description")).click();
    driver.findElement(By.id("description")).click();
    driver.findElement(By.id("description")).sendKeys("Etant donné test , Lorsque test , Alors test");
    driver.findElement(By.cssSelector(".btn-primary")).click();
    driver.findElement(By.linkText("Nouveau test")).click();
    driver.findElement(By.id("name")).click();
    driver.findElement(By.id("name")).sendKeys("test1");
    driver.findElement(By.id("description")).click();
    driver.findElement(By.id("description")).sendKeys("Etant donné test1 , Lorsque test1 , Alors test1");
    driver.findElement(By.cssSelector(".btn-primary")).click();
    driver.findElement(By.linkText("Nouveau test")).click();
    driver.findElement(By.id("name")).click();
    driver.findElement(By.id("name")).sendKeys("test2");
    driver.findElement(By.id("description")).click();
    driver.findElement(By.id("description")).sendKeys("Etant donné test2 , Lorsque test2 , Alors test2");
    driver.findElement(By.cssSelector(".btn-primary")).click();
    driver.findElement(By.linkText("Nouveau test")).click();
    driver.findElement(By.id("name")).click();
    driver.findElement(By.id("name")).sendKeys("test3");
    driver.findElement(By.id("name")).sendKeys(Keys.DOWN);
    driver.findElement(By.id("name")).sendKeys(Keys.DOWN);
    driver.findElement(By.id("name")).sendKeys("test3");
    driver.findElement(By.id("description")).click();
    driver.findElement(By.id("description")).sendKeys("Etant donné test3 , Lorsque test3 , Alors test3");
    driver.findElement(By.cssSelector(".btn-primary")).click();
    driver.findElement(By.cssSelector(".media:nth-child(5) > form > .btn")).click();
    driver.findElement(By.cssSelector(".media:nth-child(6) > form > .btn")).click();
    driver.findElement(By.cssSelector(".media:nth-child(3) > form > .btn")).click();
    driver.findElement(By.cssSelector(".media:nth-child(4) > form > .btn")).click();
    driver.findElement(By.cssSelector(".btn-danger")).click();
  }
}
