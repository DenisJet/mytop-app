import { withLayout } from '@/Layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/inteafaces/menu.interfaces';

function Search(): JSX.Element {
  return <>Search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
