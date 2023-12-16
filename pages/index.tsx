import { Button, Htag, Ptag, Tag } from '@/components';

export default function Page(): JSX.Element {
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
    </>
  );
}
