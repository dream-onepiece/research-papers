import { Link } from 'react-router-dom';
import './index.css';

const HowToUseComponent = () => {

    return <div className="component how-to-use">
        <h1>
            {"HaRT is a language model that can be used like a traditional language model and MORE >>"}
        </h1>

        <div className='info-section'>
        <p className='info-text'>
            
            <p>
                HaRT pre-trains on the <Link to="/">HuLM</Link> task, making use of the historical data from a user. 
                HaRT model pre-trained using Twitter <Link to="/dataset">dataset</Link> can be downloaded <a className="down-link" href='https://arxiv.org/pdf/2205.05128.pdf'>here</a>.
            </p>
            <p>
                Pre-trained HaRT can be used to apply on document-level tasks like any other pre-trained transformer-based language model: 
            </p>
            <ul>
             <li>with user's historical context</li>
             <li>without user's historical context (if unavailable)</li>
            </ul>
            <p>Pre-trained HaRT can also be applied to user-level downstream tasks.</p>
            <p className='top-space'>Our <a href="https://arxiv.org/pdf/2205.05128.pdf" target="_blank">paper</a> evaluate on 2 document-level tasks:</p>

            <ul>
                <li>Sentiment Analysis</li>
                <li>Stance Detection </li>
            </ul>
            <p>and 2 user-level tasks:</p>
            <ul>
                <li>Age estimation</li>
                <li>(Openness) Personality assessment</li>
            </ul>
        </p>
        </div>


        <p className="heading-main">The Basics:</p>

        <p className="heading-sub">Inputs:</p>
        <p className="desc-use">
            HaRT takes the input text sequences with user identifiers and automatically creates blocks of user text sequences from the inputs.
            A block is a temporally ordered sequence of messages (text document) of a user separated by a special token <insep />
        </p>
        <p className="heading-sub"> What if historical context is unavailable? </p>
        <p className="desc-use"> 
        Just the same! HaRT still takes in inputs in the same format (values of user identifier become redundant here: may use arbitrary values.)
        In this case, HaRT loads the inputs like any other transformer-based language model, but still makes use of the pre-trained weights for user states.
        </p>
        <p className="heading-sub"> Outputs: </p>
        <p className="desc-use">
            HaRT can output hidden states of input text sequences and user states corresponding to each block.
        </p>


        <p className="heading-main">
            How to use HaRT for document-level tasks?
        </p>
        <p className="desc-use"> 
            <p>
                <p className="heading-sub">Inputs:</p> The input format is the same but for an additional label column.
            </p>
            <p>
                <p className="heading-sub">Outputs:</p>
                Weighted F1 (along with other metrics)
            </p>
        </p>
        <p className='heading-sub' >
            Process:
        </p>
        <p className="desc-use">
            HaRT uses the last non-padded tokens representation/hidden states to produce document-level predictions (classification/regression).
        </p>
        <p className="heading-sub">
            How to use HaRT for document-level tasks if historical context is unavailable?
        </p>
        <p className="desc-use">
            Just the same! 
        </p>

        <p className="heading-main">
            How to use HaRT for user-level tasks?
        </p>
        <p className="desc-use">
            <p>
                <p className="heading-sub">Inputs:</p> 
                The input format is the same but for an additional label column (replicating the same label for the same user's different input text sequences).
            </p>
            <p>
                <p className="heading-sub">Outputs:</p> 
                Pearson r correlation and dis-attenuated pearson r correlation  (along with other metrics)
            </p>
        </p>
        <p className='heading-sub'>
            Process:
        </p>
        <p className="desc-use">
            HaRT uses the average of the user states, from input blocks from the same user, as the user representation to produce user-level predictions (classificiation/regression).
        </p>
        <p className="desc-use readme">
            For more details, please refer to <a href="#" className='readme-link' target="_blank"> Readme </a>
        </p>
    </div>

}

export default HowToUseComponent;