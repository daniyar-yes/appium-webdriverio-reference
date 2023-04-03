import { remote, RemoteOptions, Browser } from "webdriverio";
import ProjectCapabilities from "./projectCapabilities";
import RNTodo from "./viewObjects/rnTodo";
import { tapElement, setValueOfElement } from "./utils";

describe('RN Todo App Test', function () {
	let driver: Browser
	this.timeout(40000);
	before(async function () {
		const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});
	it('Login and add new todo', async function () {
        // Enter email
        await setValueOfElement(driver, `android=${RNTodo.locators.emailTextField}`, "daniyar@smart.com");
        // Enter password
        await setValueOfElement(driver, `android=${RNTodo.locators.passwordTextField}`, "lor3m1psuM");
        // Sign In with entered Email / Password
        await tapElement(driver, `android=${RNTodo.locators.signInButton}`);
        // Enter Todo Text
        await setValueOfElement(driver, `android=${RNTodo.locators.addNewTodoTextField}`, "1st from Appium / WebDriverIO / Mocha");
        // Add todo
        await tapElement(driver, `android=${RNTodo.locators.addTodoButton}`);
	});
	after(async function () {
		await setTimeout(() => driver.deleteSession(), 5000)
	});
});