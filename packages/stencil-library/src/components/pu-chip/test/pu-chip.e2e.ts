import { newE2EPage } from '@stencil/core/testing';

describe('pu-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-chip></pu-chip>');

    const element = await page.find('pu-chip');
    expect(element).toHaveClass('hydrated');
  });
});
