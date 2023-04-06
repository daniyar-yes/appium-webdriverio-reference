import { remote, RemoteOptions, Browser } from "webdriverio";
import ProjectCapabilities from "./projectCapabilities";
import Railtown from "./viewObjects/railtown";
import { tapElement, setValueOfElement, scrollDown } from "./utils";

describe('Railtown App Test', function () {
	let driver: Browser
	this.timeout(200000);
	before(async function () {
		const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});
	it('Login and add items to cart', async function () {
        // Enter email
		await tapElement(driver, `android=${Railtown.locators.allowPermission}`)
		await tapElement(driver, `android=${Railtown.locators.headerMenuButton}`)
		await tapElement(driver, `android=${Railtown.locators.signInButton}`)
		// Enter Email
        await setValueOfElement(driver, `android=${Railtown.locators.emailTextField}`, "yeskaliyevdan@hotmail.com");
        // Enter password
        await setValueOfElement(driver, `android=${Railtown.locators.passwordTextField}`, "B$@Marius2012!");
        //  Sign In with entered Email / Password
        await tapElement(driver, `android=${Railtown.locators.signInButton}`)
        // Select New Order
        await tapElement(driver, `android=${Railtown.locators.headerMenuButton}`)
        await tapElement(driver, `android=${Railtown.locators.orderHistoryMenu}`)
        // Select Pick Up option and Location
		await tapElement(driver, `android=${Railtown.locators.newOrderButton}`)
		await tapElement(driver, `android=${Railtown.locators.pickUpOption}`)
		await tapElement(driver, `android=${Railtown.locators.streetOptionHowe}`)
		await tapElement(driver, `android=${Railtown.locators.nextButton}`)
		// Select Date - fragile part, since you can't order for a far date, and tests will brake in the near future
		await tapElement(driver, `android=${Railtown.locators.selectDateAndTime}`)
		await tapElement(driver, `android=${Railtown.locators.selectDateDayFromCalendar}`)
		await tapElement(driver, `android=${Railtown.locators.okCalendarButton}`)
		// Select Time
		await tapElement(driver, `android=${Railtown.locators.twoHourTimeOption}`)
		await tapElement(driver, `android=${Railtown.locators.thirtyMinuteTimeOption}`)
		await tapElement(driver, `android=${Railtown.locators.pmTimeOption}`)
		await tapElement(driver, `android=${Railtown.locators.okCalendarButton}`)
		// Scroll to Sandwiches
		await scrollDown(driver, 300)
		await scrollDown(driver, 300)
		await scrollDown(driver, 300)
		await scrollDown(driver, 300)
		// Select Sandwiches
		await tapElement(driver, `android=${Railtown.locators.sandwichesCategoryButton}`)
		// Select Chicke Sub
		await tapElement(driver, `android=${Railtown.locators.chickenClubItemButton}`)
		// Scroll Down to Add to cart
		await scrollDown(driver, 300)
		await scrollDown(driver, 300)
		// Add to cart
		await setTimeout(() => tapElement(driver, `android=${Railtown.locators.addToCartButton}`), 2000)
		// Sign Out
		// await tapElement(driver, `android=${Railtown.locators.appDrawerMenuIcon}`)
		// await tapElement(driver, `android=${Railtown.locators.signOutButton}`)


		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.selectDateAndTime}`), 1000)
		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.selectDateDayFromCalendar}`), 1000)
		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.okCalendarButton}`), 1000)
		// // Select Time
		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.twoHourTimeOption}`), 1000)
		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.thirtyMinuteTimeOption}`), 1000)
		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.pmTimeOption}`), 1000)
		// await setTimeout(() => tapElement(driver, `android=${Railtown.locators.okCalendarButton}`), 1000)


	});
	after(async function () {
		await setTimeout(() => driver.deleteSession(), 5000)
	});
});