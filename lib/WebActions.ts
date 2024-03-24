import fs from 'fs';
import type { Page } from '@playwright/test';
import { BrowserContext, expect } from '@playwright/test';
import { testConfig } from '../testConfig';

export class WebActions {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async screenshot(name: string, width: number, height: number) {
        await this.page.screenshot({ 
            path:`./screenshots/screenshots${width}x${height}/${name}.jpeg`, 
            clip: {
                x: 0,
                y: 0,
                width: width,
                height: height
            },
            
            quality: 20,
            type: 'jpeg',
            timeout: 1000,
            fullPage: true 
        });
    }

    async addScreenshotToReport(name: string, width: number, height: number) {
        await testInfo.attach('name', {body: await page.screenshot(), contentType: 'image/jpeg'});
    }
}