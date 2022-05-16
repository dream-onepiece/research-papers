import ContactUSComponent from '../components/contact-us';
import Header from '../components/header';

const ContactUS = () => {
    return <div className="page">
        <Header />
        <main className='center'>
            <ContactUSComponent />
        </main>
    </div>
}

export default ContactUS;