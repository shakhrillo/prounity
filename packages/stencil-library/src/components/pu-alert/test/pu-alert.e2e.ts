import { newE2EPage } from '@stencil/core/testing';

describe('pu-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-alert></pu-alert>');

    const element = await page.find('pu-alert');
    expect(element).toHaveClass('hydrated');
  });
});
