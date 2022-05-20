import HowToUseComponent from '../components/how-to-use';
import Header from '../components/header';

const HowToUse = () => {
    return <div className="page">
        <Header />
        <main className='center'>
            <HowToUseComponent />
        </main>
    </div>
}

export default HowToUse;