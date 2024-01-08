import { withLayout } from '@/Layout/Layout';
import { Htag } from '@/components';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/inteafaces/menu.interfaces';
import { API } from '@/helpers/api';
//import { Error404 } from './404';
//import Error from 'next/error';

function Page(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  //return <Error statusCode={404} />;
  //return <Error404 />;

  return (
    <>
      <Htag tag='h1'>Добро пожаловать в Самый лучший топ!!!</Htag>
      <Htag tag='h2'>Пожалуйста, выберите категорию.</Htag>
    </>
  );
}

export default withLayout(Page);

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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
