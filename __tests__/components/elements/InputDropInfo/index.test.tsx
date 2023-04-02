import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { InputDropInfo } from '@/components';

describe('<InputDropInfo />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <InputDropInfo />);

    expect(getByTestId('input-drop-info-content')).toBeInTheDocument();
  });
});
