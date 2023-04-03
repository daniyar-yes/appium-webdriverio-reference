import { Browser } from "webdriverio";
class RNTodo {
  public static locators = {
    emailTextField: "new UiSelector().text(\"Email\")",
    passwordTextField: "new UiSelector().text(\"Password\")",
    signInButton: "new UiSelector().text(\"SIGN IN\")",
    cancelSavingPasswordButton: "new UiSelector().text(\"CANCEL\")",
    addNewTodoTextField: "new UiSelector().text(\"Add new Todo\")",
    addTodoButton: "new UiSelector().text(\"ADD TODO\")",
  }
}
export default RNTodo;