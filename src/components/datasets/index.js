import './index.css';

const DataSetComponent = () => {
    return <div className="dataset">
        <h1 className="ds heading h2">
            Document-level Tasks Datasets
        </h1>
        <div className="ds block">
            <p className="ds-title bold medium h3">Stance Detection</p>
            <p className="ds-desc medium">
                <span className="ds-desc label italic body-copy">
                    Labeled dataset:  
                </span>
                <span className="ds-desc label normal body-copy">
                    SemEval2016 dataset (<a className='data-link' href="https://aclanthology.org/S16-1003/" target="_blank">Mohammad et al., 2016</a>)
                </span>
            </p>
            <p className="ds-desc medium">
                <span className="ds-desc label italic body-copy">
                    Historical Context:
                </span>
                <span className="ds-desc label normal body-copy">
                    A subset of the extended dataset from <a className='data-link' target="_blank" href='https://aclanthology.org/W19-2103/'>Lynn et al. (2019)</a>
                </span>
            </p>
            <p className="ds-desc download body-copy">
            <a className='down-link' href="https://drive.google.com/uc?export=download&id=1lYi9umVCslNfbud36Nh8uC0dCEbhxjbB">Download</a> Stance train, dev and test sets with history.
            </p>
        </div>
        <div className="ds block">
            <p className="ds-title bold medium h3">Sentiment Analysis</p>
            <p className="ds-desc medium">
                <span className="ds-desc label italic body-copy">
                    Labeled dataset:  
                </span>
                <span className="ds-desc label normal body-copy">
                    SemEval-2013 dataset (<a target="_blank" className='data-link' href="https://aclanthology.org/S13-2052/">Nakov et al., 2013</a>)
                </span>
            </p>
            <p className="ds-desc medium">
                <span className="ds-desc label italic body-copy">
                    Historical Context: 
                </span>
                <span className="ds-desc label normal body-copy">
                    A subset of the extended dataset from <a target="_blank" className='data-link' href='https://aclanthology.org/W19-2103/'>Lynn et al. (2019)</a> 
                </span>
            </p>
            <p className="ds-desc download body-copy">
            <a className='down-link' href="https://drive.google.com/uc?export=download&id=19KA3zp5BcPZjb5gtbKWWltlhGFVQJlOv">Download</a> Sentiment train, dev and test sets with history.
            </p>
        </div>
        <p className="ds heading h2">
            Pretraining and Evaluation Datasets
        </p>
        <div className="ds block">
            <p className="ds-desc medium">
                <span className="ds-desc label italic body-copy">
                    Dataset:  
                </span>
                <span className="ds-desc label normal body-copy">
                 A subset of the County Tweet Lexical Bank (<a target="_blank" className='data-link' href='https://aclanthology.org/D18-1148/'>Giorgi et al., 2018</a>) appended with newer 2019 and 2020 tweets, in total spanning 2009 through 2020.
                </span>
            </p>
            
            <p className="ds-desc download body-copy">
            <a className='down-link' href="https://drive.google.com/uc?export=download&id=1D2a4q_oGaY9xIVJyFymnB1p_bCprQTgs">Download</a> user IDs for train, dev, and test sets.
            </p>
        </div>
    </div>
}

export default DataSetComponent;