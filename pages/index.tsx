import { withLayout } from '@/Layout/Layout';
import { Button, Htag, Input, PTag, Rating, Tag, Textarea } from '@/components';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/inteafaces/menu.interfaces';
import { API } from '@/helpers/api';

function Page(): JSX.Element {
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
      <PTag fontSize='large'>P tag large text</PTag>
      <PTag>P tag medium text</PTag>
      <PTag fontSize='small'>P tag small text</PTag>
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
      <Textarea placeholder='test textarea' />
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
