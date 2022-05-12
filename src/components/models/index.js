import { Link } from "react-router-dom";
import CustomTable from "../commons/table";

import './index.css';

const ModelsComponent = () => {
    return <div className="models component">
        <h1 className="model-heading">
            HaRT model pre-trained on Twitter [<Link to="/dataset">dataset</Link>] : [<a download={true} href="https://drive.google.com/uc?export=download&id=1MGJN1Fp21Q7lPbICNx2_D5qZg8gG0Qla"><img className="icon" src='./images/download.webp' alt='Download dataset' /></a>]
        </h1>
        <div className="tables">
            <div className="table-holder">
                <h3>Language Model Perplexity:</h3>
                <CustomTable
                columns={['Model','Dev(ppl)','Test(ppl)']}
                rows={
                    [
                        [{title: 'GPT-2', subTitle: 'frozen'},'112.82','116.35'],
                        [{title: 'GPT-2', subTitle: 'HLC'},'47.61','48.51'],
                        [{title: 'HaRT', subTitle: 'Twitter'}, '00.00','00.00'],
                        ['HaRT','27.49','26.11']
                    ]
                }
            />
            </div>
            <div className="table-holder">
                <h3>Document-level Downstream Tasks:</h3>
                <CustomTable
                columns={['Model','Stance(F1)','Sentiment(F1)']}
                rows={
                    [
                        [{title: 'GPT-2', subTitle: 'HLC'},'68.60','76.75'],
                        [{title: 'HaRT', subTitle: 'Twitter'},'70.53','77.01'],
                        ['HaRT','71.10','78.25']
                    ]
                }
            />
            </div>
        </div>
    </div>
}

export default ModelsComponent;