import { Browser } from "webdriverio";
class AndroidContacts {
  public static locators = {
    floatingActionButton: "id:com.android.contacts:id/hw_fab",
    fullNameTextField: "new UiSelector().text(\"Name\")",
    lastNameTextField: "new UiSelector().text(\"Last name\")",
    saveButton: "id:android:id/icon2",
    moreOptionsMenuButon: "new UiSelector().description(\"More\")",
    moreOptionsMenuDeleteButton: "new UiSelector().text(\"Delete contact\")",
    deleteContactConfirmationButton: "new UiSelector().text(\"DELETE\")"
  }
}
export default AndroidContacts;