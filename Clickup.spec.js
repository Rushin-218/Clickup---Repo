const {test, expect} = require('@playwright/test')
// import{test, expect} from '@playwright/test'

test('Login Test 1', async({page})=> {

        await page.goto('https://app.clickup.com/login')
        await page.locator('[placeholder="Enter your work email"]').fill ('akshita@simformsolutions.com')
        await page.locator('[placeholder="Enter password"]').fill('Akshita31!!')
        page.locator('[type="submit"]').click()
        page.locator('[data-test="project-row__name__QA"]').click()
        page.locator('[data-test="category-row__folder-name__Test Management"]').click()
        page.locator('[data-test="sidebar-flat-tree__item-name-Test Runs"]').getByRole('link', { name: 'Test Runs' }).click()
        page.getByTestId('task-row__container__Dummy Regression').locator('[data-test="task-row__open-subtasks"]').click()
        // page.getByTestId('task-row__container__Categories Link on top navigation bar, when user is already on Categories page').locator('[data-test="task-row-main__link"]').click()
        page.getByTestId('task-row__container__Verify on the click on For Him category user is able to redirect to the category page').locator('[data-test="task-row-main__link"]').click()
        await page.pause()
        // await browser.close()
})
