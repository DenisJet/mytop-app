import { Button, Htag, Ptag, Rating, Tag } from '@/components';
import { useEffect, useState } from 'react';

export default function Page(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('counter' + counter);
  });

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(counter + 1)}>
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
      <Rating rating={2} />
    </>
  );
}
