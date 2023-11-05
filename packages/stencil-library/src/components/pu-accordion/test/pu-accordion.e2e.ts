import { newE2EPage } from '@stencil/core/testing';

describe('pu-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-accordion></pu-accordion>');

    const element = await page.find('pu-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
