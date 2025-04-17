import { Locator, Page } from "@playwright/test";
import { ProjectTasksPage } from "./project_tasks_page.ts";

export class CreateNewProjectModal {
    private readonly page: Page;
    private readonly nameInput: Locator;
    private readonly saveButton: Locator;

      constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('//div[@data-testid="Name"]/input');
        this.saveButton = page.locator('//button[@type="submit"]');
      }

      async typeName(name: string): Promise<CreateNewProjectModal> {
        await this.nameInput.fill(name);
        return this;
      }

      async clickAddProject(): Promise<ProjectTasksPage> {
        await this.saveButton.click();
        return new ProjectTasksPage(this.page);
      }
}