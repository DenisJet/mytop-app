import { withLayout } from '@/Layout/Layout';
import { Button, Htag, Ptag, Rating, Tag } from '@/components';
import { useEffect, useState } from 'react';

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
    </>
  );
}

export default withLayout(Page);
