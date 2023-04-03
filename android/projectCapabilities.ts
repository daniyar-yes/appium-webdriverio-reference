import { RemoteOptions } from 'webdriverio';

class ProjectCapabilities {
    private static webDriverPath: string = '/wd/hub';
    private static webDriverPort: number = 4723;

    static androidBaseCapabilities(appPackage: string = "com.anonymous.rnTodo", appActivity: string = "com.anonymous.rnTodo.MainActivity", additionalCaps?: object): RemoteOptions {
        const desiredCapabilities = {
            platformName: "Android",
            deviceName: "Android Emulator",
            appPackage: appPackage,
            appActivity: appActivity,
            automationName: "UiAutomator2",
            ...additionalCaps
        };
        return {
            path: this.webDriverPath,
            port: this.webDriverPort,
            capabilities: desiredCapabilities
        }
    }
}

export default ProjectCapabilities;