import Document, { Html, Main, NextScript, Head } from "next/document";

// Document class already exists in NextJS so it needs tob e extended
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="fonts/IBMPlexSans-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="fonts/IBMPlexSans-SemiBold.tff"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="fonts/IBMPlexSans-Regular.tff"
            as="font"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
