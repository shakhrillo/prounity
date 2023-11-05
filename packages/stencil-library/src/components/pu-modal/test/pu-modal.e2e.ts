import { newE2EPage } from '@stencil/core/testing';

describe('pu-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-modal></pu-modal>');

    const element = await page.find('pu-modal');
    expect(element).toHaveClass('hydrated');
  });
});
