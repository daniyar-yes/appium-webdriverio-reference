import {Browser} from "webdriverio";

class Page {
    public static locators = {
        allowPermission: "new UiSelector().text(\"Allow only while using the app\")",
        letsGetStarted: 'new UiSelector().textContains(\"LET\'S GET STARTED\")',
        pickUp: 'new UiSelector().text("PICK UP")'
    }
}

export default Page;