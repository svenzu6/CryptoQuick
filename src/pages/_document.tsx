import type { DocumentContext } from 'next/document'
import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(context: DocumentContext) {
        const initialProps = await Document.getInitialProps(context)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyDocument
