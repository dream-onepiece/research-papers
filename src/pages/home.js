import Description from '../components/description';
import Header from '../components/header';

const Home = () => {
    return <div className="page">
        <Header />
        <main className='center'>
            <Description />
        </main>
    </div>
}

export default Home;