const { Builder, By, Key, util } = require("selenium-webdriver");
const {
  INSTAGRAM_POST,
  USERS,
  INSTAGRAM_USER,
  INSTAGRAM_PASSWORD,
} = require("./config.js");
require("chromedriver");

async function run() {
  let driver = await new Builder().forBrowser("chrome").build();
  // await driver.get("http://google.com");
  await driver.get("https://instagram.com");

  // await driver.get(INSTAGRAM_POST);
  console.log("Finding Cookies Popup");

  await driver
    .findElement(By.xpath("/html/body/div[4]/div/div/button[1]"))
    .click();

  console.log("Log in");
  await driver
    .findElement(
      By.xpath(
        "/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[1]/div/label/input"
      )
    )
    .sendKeys(INSTAGRAM_USER);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[2]/div/label/input"
      )
    )
    .sendKeys(INSTAGRAM_PASSWORD);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[3]/button"
      )
    )
    .click();
  console.log("Logged in successfully");
  await driver.sleep(5000);
  console.log("Going to post");
  await driver.get(INSTAGRAM_POST);
  await driver.sleep(5000);

  console.log(USERS.length);
  for (let i = 0; i < USERS.length; i++) {
    if (i > 0 && i % 10 == 0) {
      console.log("Waiting 5 minutes before commenting");
      await driver.sleep(300000);
      console.log("Continue...");
    }
    const user = "@" + USERS[i];
    console.log(`Mentioning ${user}`);
    await driver
      .findElement(
        By.xpath(
          "/html/body/div[1]/section/main/div/div[1]/article/div[3]/section[1]/span[2]/button"
        )
      )
      .click();
    const action = driver.actions();
    await action.sendKeys(user).perform();
    await driver
      .findElement(
        By.xpath(
          "/html/body/div[1]/section/main/div/div[1]/article/div[3]/section[3]/div/form/button[2]"
        )
      )
      .click();

    await driver.sleep(15000);
  }
}

run();
