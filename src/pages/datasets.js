import Header from '../components/header';
import DataSetComponent from '../components/datasets';

const DataSets = () => {
    return <div className="page">
        <Header />
        <main>
            <DataSetComponent />
        </main>
    </div>
}

export default DataSets;