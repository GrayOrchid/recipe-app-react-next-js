import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import "styles/global.css";
import Provider from './provider';

export const metadata = {
    title: 'More Food',
    desciption: 'Add , share and cook with More Food '
}

const Layout = ({ children }) => {
    return (
        <html>
            <body className='body'>
                <Provider>
                    <Header />
                    <main className="main">
                        {children}
                    </main>
                </Provider>
                <Footer />
            </body>
        </html>
    );
}

export default Layout;
