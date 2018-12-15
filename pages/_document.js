import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <html>
          <Head>
            <style>{`body { margin: 0; height: auto; } /* custom! */`}</style>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      )
    }
  }