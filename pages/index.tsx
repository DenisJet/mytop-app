import { withLayout } from '@/Layout/Layout';
import { Button, Htag, Input, Ptag, Rating, Tag } from '@/components';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/inteafaces/menu.interfaces';

function Page({ menu }: PageProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right'>
        Button
      </Button>
      <Button appearance='ghost' arrow='down'>
        Button
      </Button>
      <Ptag fontSize='large'>P tag large text</Ptag>
      <Ptag>P tag medium text</Ptag>
      <Ptag fontSize='small'>P tag small text</Ptag>
      <Tag size='small' color='ghost'>
        Tag
      </Tag>
      <Tag size='medium' color='red'>
        Tag
      </Tag>
      <Tag size='medium' color='green'>
        Tag
      </Tag>
      <Tag color='primary'>Tag</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='test' />
    </>
  );
}

export default withLayout(Page);

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
