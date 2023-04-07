import {remote, Browser} from "webdriverio";
import Page from "./gptObjects";

const config = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
            deviceName: "Android Emulator",
            appPackage: "ca.craver.railtown.staging",
            appActivity: "ca.craver.MainActivity",
            automationName: "UiAutomator2",
    }
};

describe('click buttons', function () {
    this.timeout(400000);
    let driver: Browser;

    before(async () => {
        driver = await remote(config);
    });

    

    it('should click on required items', async () => {
        // Click on "Let's get started" button
        const allowPemissionButton = await driver.$(`android=${Page.locators.allowPermission}`);
        await setTimeout(() => allowPemissionButton.click(), 5000)
        const letsGetStartedButton = await driver.$(`android=${Page.locators.letsGetStarted}`);
        await letsGetStartedButton.waitForDisplayed()
        await letsGetStartedButton.click()

        // Click on "PICK UP" button
        const pickUpButton = await driver.$(`android=${Page.locators.pickUp}`);
        await pickUpButton.waitForDisplayed()
        await pickUpButton.click();
    });

    after(async function () {
		await setTimeout(() => driver.deleteSession(), 5000)
	});
});