import { Link } from "react-router-dom";
import CustomTable from "../commons/table";

import './index.css';

const ModelsComponent = ( props ) => {

    const { showHeading = true } = props;

    return <div className="models component">
        { showHeading && 
        <>
            <h1 className="model-heading h1">
                <a download={true} href="https://drive.google.com/uc?export=download&id=1MGJN1Fp21Q7lPbICNx2_D5qZg8gG0Qla"><img className="icon" src='./images/download.webp' alt='Download dataset' /></a> Download HaRT model pre-trained on Twitter <Link className="down-link" to="/dataset">dataset</Link>
            </h1>
            <p className="model-subhead h2">
                Reference metrics
            </p>
        </>
        }
        <div className="tables">
            <div className="table-holder">
                <h3 className="body-copy">Language Model Perplexity</h3>
                <CustomTable
                columns={['Model','Test-HLC (ppl)','Test-Twitter (ppl)']}
                rows={
                    [
                        [{title: 'GPT-2', subTitle: 'frozen'},'116.35','144.67'],
                        [{title: 'GPT-2', subTitle: 'HLC'},'48.51','39.93'],
                        [{title: 'HaRT', subTitle: 'Twitter'},'33.15','23.76'],
                        ['HaRT','26.11','24.70']
                    ]
                }
            />
            </div>
            <div className="table-holder">
                <h3 className="body-copy">Document-level Downstream Tasks</h3>
                <CustomTable
                columns={['Model','Stance (F1)','Sentiment (F1)']}
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
        {showHeading && 
            <p className="desc refer h1">
                Refer our <a className="down-link" href='https://aclanthology.org/2022.findings-acl.52/'>paper</a> for details.
            </p>
        }
    </div>
}

export default ModelsComponent;
