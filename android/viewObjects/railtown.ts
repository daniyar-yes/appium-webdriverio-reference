import { Browser } from "webdriverio";
class Railtown {
  public static locators = {
        headerMenuButton: "new UiSelector().resourceId(\"OrderChoiceHeaderMenuButton\")",
    allowPermission: "new UiSelector().text(\"ALLOW ONLY WHILE USING THE APP\")",
    signInButton: "new UiSelector().text(\"SIGN IN\")",
    emailTextField: "new UiSelector().text(\"EMAIL\")",
    passwordTextField: "new UiSelector().text(\"PASSWORD\")",
    orderHistoryMenu: "new UiSelector().text(\"Order History\")",
    newOrderButton: "new UiSelector().text(\"NEW ORDER\")",
    pickUpOption: "new UiSelector().text(\"PICK UP\")",
    streetOptionHowe: "new UiSelector().text(\"Howe St.\")",
    nextButton: "new UiSelector().text(\"NEXT\")",
    selectDateAndTime: "new UiSelector().text(\"SELECT DATE AND TIME\")",
    selectDateDayFromCalendar: "new UiSelector().text(\"19\")",
    okCalendarButton: "new UiSelector().text(\"OK\")",
    twoHourTimeOption: "new UiSelector().description(\"2\")",
    thirtyMinuteTimeOption: "new UiSelector().description(\"30\")",
    pmTimeOption: "new UiSelector().text(\"P.M.\")",
    sandwichesCategoryButton: "new UiSelector().text(\"SANDWICHES\")",
    chickenClubItemButton: "new UiSelector().text(\"The Chicken Club\")",
    addToCartButton: "new UiSelector().text(\"ADD TO CART\")",
    // appDrawerMenuIcon: "id:ca.craver:id/AppDrawerMenuIcon",
    signOutButton: "new UiSelector().text(\"Sign Out\")",
  }
}
export default Railtown;