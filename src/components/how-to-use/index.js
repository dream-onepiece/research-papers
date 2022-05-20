import { Link } from 'react-router-dom';
import './index.css';

const HowToUseComponent = () => {

    return <div className="component how-to-use">
        <h1 className='h2 tagline'>
            {"HaRT can be used like a traditional language model and more..."}
        </h1>

        <div className='info-section'>
        <p className='info-text body-copy'>
            
            <p>
                HaRT pre-trains on the <Link to="/">HuLM</Link> task, making use of the historical data from a user. 
                HaRT model pre-trained using Twitter <Link to="/dataset">dataset</Link> can be downloaded <a className="down-link" href='https://drive.google.com/uc?export=download&id=1MGJN1Fp21Q7lPbICNx2_D5qZg8gG0Qla' target='_blank'>here</a>.
            </p>
            <p>
                The pre-trained HaRT model can be fine-tuned for 
            </p>
            <ul>
                <li>
                    document-level tasks like any other pre-trained transformer-based language model
                    <ul>
                        <li>with user's historical context</li>
                        <li>without user's historical context (if unavailable)</li>
                    </ul>
                </li>
                
                <li>user-level downstream tasks</li>
            </ul>
            
            <p className='top-space'>In our <a href="https://aclanthology.org/2022.findings-acl.52/" target="_blank">paper</a> ,we show two applications for each</p>
            <ul>
                <li className='outer-li' >
                    document-level tasks
                    <ul>
                        <li>Sentiment Analysis</li>
                        <li>Stance Detection </li>
                    </ul>
                </li>
                <li className='outer-li'>
                    user-level tasks
                    <ul>
                        <li>Age estimation</li>
                        <li>(Openness) Personality assessment</li>
                    </ul>
                </li>
            </ul>
            
            
        </p>
        </div>


        <p className="heading-main h2">The Basics</p>

        <h3 className="heading-sub h3">Inputs</h3>
        <p className="desc-use body-copy">
            HaRT takes the input text sequences with user identifiers and automatically creates blocks of user text sequences from the inputs.
            A block is a temporally ordered sequence of messages (text document) of a user separated by a special token.
        </p>
        <h3 className="heading-sub h3"> What if historical context is unavailable? </h3>
        <p className="desc-use body-copy"> 
        Just the same! HaRT still takes in inputs in the same format (values of user identifier become redundant here: may use arbitrary values).
        In this case, HaRT loads the inputs like any other transformer-based language model, but still makes use of the pre-trained weights for user states.
        </p>
        <h3 className="heading-sub h3"> Outputs </h3>
        <p className="desc-use body-copy">
        HaRT can produce outputs at multiple levels including token level (hidden states of input tokens), document level (hidden state of last non-padded token), and user level (average of user-states for all non-padded input blocks).
        </p>


        <p className="heading-main h2">
            How to use HaRT for document-level tasks?
        </p>
        <h3 className='heading-sub h3' >
            Process
        </h3>
        <p className="desc-use body-copy">
            HaRT uses the last non-padded tokens representation/hidden states to produce document-level predictions (classification/regression).
        </p>
        <h3 className="heading-sub h3">Inputs</h3> 
        <p className="desc-use body-copy">The input format is the same but with an additional column for document labels.</p>
        <h3 className="heading-sub h3">Output Metrics</h3>
        <p className="desc-use body-copy">Weighted F1 (along with other metrics).</p>
        
        <h3 className="heading-sub h3">
            How to use HaRT for document-level tasks if historical context is unavailable?
        </h3>
        <p className="desc-use body-copy">
        The input to HaRT in this case will not have the historical context and is handled via an argument passed when training/evaluating. 
        </p>

        <p className="heading-main h2">
            How to use HaRT for user-level tasks?
        </p>
        <h3 className='heading-sub h3'>
            Process
        </h3>
        <p className="desc-use body-copy">
            HaRT uses the average of the user states, from input blocks from the same user, as the user representation to produce user-level predictions (classificiation/regression).
        </p>
            <h3 className="heading-sub h3">Inputs</h3> 
            <p className="desc-use body-copy">
            The input format is the same but with an additional column for user labels.
            </p>
        <p>
                <h3 className="heading-sub h3">Output Metrics</h3> 
                <p className="desc-use body-copy zero-bottom">
                    For regression task: Pearson r correlation and dis-attenuated pearson r correlation  (along with other metrics).
                </p>
                <p className="desc-use body-copy">
                    For classification task: Weighted F1 (along with other metrics).
                </p>
            </p>
        
        <p className="desc-use readme h2">
            Refer the github <a href="#" className='readme-link' target="_blank">readme</a> for more details.
        </p>
    </div>

}

export default HowToUseComponent;