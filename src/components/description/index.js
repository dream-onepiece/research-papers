import content from './content.json';
import './index.css';

const Description = () => {

    return <div className='description'>
        { true && <div className='content'>
            <h1 className='amatic heading'>
                <span className='center block'>
                    Human Language Modeling
                </span>
                <span className='center block'>
                    using
                </span>
                <span className='center block'>
                    HaRT: Human-aware Recurrent Transformers
                </span>
            </h1>
            <div className='links'>
                <p className='link-block'>
                    <a href='https://github.com/humanlab/HaRT' target="_blank">
                        View Code
                    </a>
                </p>
                <p className='link-block'> 
                    <a href='https://arxiv.org/pdf/2205.05128.pdf' target="_blank">
                        Read paper
                    </a>
                </p>
            </div>
            <p className='desc info'>
                Language modeling is fundamental to NLP, with many large transformer based models becoming widespread.
            </p>
            <div className='image-block fundamental'>
                <img src='./images/fundamental_LM.png' alt='models' />
            </div>
            <p className='desc info'>
                Large language models treat dependent inputs as independent even when they are not.
            </p>
            <div className='video-block'>
                <img src='./videos/gif_one.gif' />
            </div>
            <p className='desc small'>
                <span className='left block'>
                    Additionally, the inherent higher order structure of language, which is words come from documents and documents come from humans, is not explicit in the language modeling tasks of large LMs.
                </span>
                <span className='left block'>
                    To address these gaps, we propose Human Language Modeling (HuLM), a language modeling task grounded in the "natural" generators of language, people.
                </span>
            </p>
            <div className='image desc block'>
                <p className='desc small'>Building from the traditional language task, that is</p>
                <img className='medium' src='./images/tradi_lang_task.png' alt='Traditional Language task' />
            </div>
            <div className='image desc block'>
                <p className='desc small'>In HuLM, we also condition on a user state</p>
                <img className='medium' src='./images/user_state.png' alt='User state' />
            </div>
            <div className='image desc block'>
                <p className='desc small'>But, human states are somewhat stable but not entirely static.</p>
                <img className='medium' src='./images/stable.png' alt='Stable' />
                <p className='info-alt'>{"(Washington Outsider, 2014)"}</p>
            </div>
            <div className='image desc block'>
                <p className='desc small'>To account for this, we condition on a dynamic user state:</p>
                <img className='medium' src='./images/dynamic_user_state.png' alt='Dynamic User state' />
            </div>
            <div className='image desc block'>
                <p className='desc small'>To address HuLM, we introduce HaRT: Human-aware Recurrent Transformer, an auto-regressive transformer with a recurrent user state:</p>
                <video autoPlay muted controls>
                    <source src='./videos/video_transformer.mp4' type="video/mp4"/>
                </video>
            </div>
        </div> }
    </div>

}

export default Description;