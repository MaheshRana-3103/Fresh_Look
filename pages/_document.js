import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,800&family=Nunito+Sans:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,800&family=Nunito+Sans:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
