import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import Home from '@/templates/Home';

describe('<Home />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <Home />);

    expect(getByTestId('home-content')).toBeInTheDocument();
  });
});
