import { withLayout } from '@/Layout/Layout';
import { Htag } from '@/components';

export function Error500(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Ошибка 500</Htag>
    </>
  );
}

export default withLayout(Error500);
