import { newE2EPage } from '@stencil/core/testing';

describe('pu-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-radio></pu-radio>');

    const element = await page.find('pu-radio');
    expect(element).toHaveClass('hydrated');
  });
});
