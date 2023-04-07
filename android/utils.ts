import { Browser, Element } from "webdriverio";
// Wait up to 20 seconds
const MAX_ELEMENT_WAIT_THRESHOLD_MS = 40000;
async function findElement(driver: Browser, elementLocator: string, timeout: number = MAX_ELEMENT_WAIT_THRESHOLD_MS) {
	const element: Element = await driver.$(elementLocator);
	await element.waitForExist({
		timeout: timeout
	});
	return element;
}
async function tapElement(driver: Browser, elementLocator: string, timeout: number = MAX_ELEMENT_WAIT_THRESHOLD_MS) {
	const element: Element = await findElement(driver, elementLocator, timeout);
	return element.click();
}
async function setValueOfElement(driver: Browser, elementLocator: string, value: string, timeout: number = MAX_ELEMENT_WAIT_THRESHOLD_MS) {
	const element: Element= await findElement(driver, elementLocator, timeout);
	await element.setValue(value)
}
async function scrollDown(driver: Browser, scrollDuration = 300) {
    const startPercentage = 90
    const endPercentage = 10
    const anchorPercentage = 50

    const { width, height } = await driver.getWindowSize()
    const density = (await driver.getDisplayDensity()) / 100
    const anchor = (width * anchorPercentage) / 100
    const startPoint = (height * startPercentage) / 100
    const endPoint = (height * endPercentage) / 100

	let forPrint = driver.getPageSource();
	console.log(forPrint)

    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: anchor, y: startPoint },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: scrollDuration, origin: 'pointer', x: 0, y: -endPoint * density },
                { type: 'pointerUp', button: 0 },
                { type: 'pause', duration: scrollDuration },
            ],
        },
    ])
}

async function print(driver: Browser,) {
	let forPrint = driver.getPageSource();
	setTimeout(() => console.log(forPrint), 5000)
}

async function clickPickup(driver: Browser) {
	const pickupButton = await driver.$('~Pick up')
}

export { tapElement, setValueOfElement, scrollDown, print, clickPickup };