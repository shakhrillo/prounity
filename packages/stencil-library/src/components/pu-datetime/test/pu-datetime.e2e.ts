import { newE2EPage } from '@stencil/core/testing';

describe('pu-datetime', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-datetime></pu-datetime>');

    const element = await page.find('pu-datetime');
    expect(element).toHaveClass('hydrated');
  });
});
