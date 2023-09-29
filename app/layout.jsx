import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import "styles/global.css";
import Provider from './provider';
import ErrorBoundary from './ErrorBoundary';

export const metadata = {
    title: 'More Food',
    desciption: 'Add , share and cook with More Food '
}

const Layout = ({ children }) => {
    return (
        <html>
            <ErrorBoundary>
                <body className='body'>
                    <Provider>
                        <Header />
                        <main className="main">
                            {children}
                        </main>
                    </Provider>
                    <Footer />
                </body>
            </ErrorBoundary>
        </html>
    );
}

export default Layout;
