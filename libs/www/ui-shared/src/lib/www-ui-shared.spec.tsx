import { render } from '@testing-library/react';

import WwwUiShared from './www-ui-shared';

describe('WwwUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WwwUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
