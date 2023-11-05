import { newE2EPage } from '@stencil/core/testing';

describe('pu-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-toggle></pu-toggle>');

    const element = await page.find('pu-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
