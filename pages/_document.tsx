import { Html, Head, Main, NextScript } from 'next/document';
//import Document from 'next/document';

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }

//   render(): JSX.Element {
//     return (
//       <Html lang='ru'>
//         <Head>
//           <body>
//             <Main />
//             <NextScript />
//           </body>
//         </Head>
//       </Html>
//     );
//   }
// }

export default function Document(): JSX.Element {
  return (
    <Html lang='ru'>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//export default MyDocument;
