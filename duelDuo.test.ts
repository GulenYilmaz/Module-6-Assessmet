import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true);

await (await driver).sleep(4000);
})





test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
    
    const drawButton = await (await driver).findElement(By.id('draw'));
    await drawButton.click();

    await (await driver).sleep(3000);
    
    const choicesButton = await (await driver).findElement(By.id('choices'));
    const displayed = await choicesButton.isDisplayed();
    
    expect(displayed).toBe(true);
})



test('Check that clicking an “Add to Duo” button displays the div with id = “player-id”', async () => {
    const drawButton = await (await driver).findElement(By.id('draw'));
    await drawButton.click();
    
    await (await driver).sleep(3000);

    const botBtn = await (await driver).findElement(By.xpath(" //button[@class='bot-btn'][1]"));
    await botBtn.click();
    await (await driver).sleep(3000);

    
    const playerDiv = await driver.findElement(By.id('player-duo'));
    const displayed = await playerDiv.isDisplayed();
    
    expect(displayed).toBe(true);
})