import { AvatarUploader } from '@/components';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container data-testid='home-content'>
      <AvatarUploader />
    </S.Container>
  );
};

export default Home;
