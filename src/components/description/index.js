import { useEffect, useRef } from 'react';
import ModelsComponent from '../models';
import content from './content.json';
import './index.css';

const Description = () => {

    let videoRef = useRef(null);

    const playVideoOnScroll = () => {
        const threshold = 300;
        let video = videoRef.current;
        let offset = video.getBoundingClientRect().top
        if (offset < threshold) {
            video.play()
        } else {
            video.pause()
        }
    }

    useEffect(() => {
        //window.addEventListener('scroll', playVideoOnScroll, false);
    }, [])

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
            {false && 
            <div className='links'>
                <p className='link-block'>
                    <img src='./images/coding.png' className='link-icon' alt='View Code' />
                    <a href='https://github.com/humanlab/HaRT' target="_blank">
                        View Code
                    </a>
                </p>
                <p className='link-block'>
                    <img src='./images/paper.png' className='link-icon' alt='Read Paper' />
                    <a href='https://arxiv.org/pdf/2205.05128.pdf' target="_blank">
                        Read paper
                    </a>
                </p>
            </div>
            }
            <div className='goal-section'>
                <h2 className='lan-heading h1'>
                    Language Modeling as a task grounded in the “natural”  generators of language, people.
                </h2>
                <p className='new-heading h2'>Objective:</p>
                <div className='parent-image'>
                    <img className='height-control' src='./images/goal.png' alt='Goal' />
                </div>
                <div className='child-image'>
                    <img className='overlay' src='./images/overlay.png' alt='' />
                </div>
                <p className='body-copy note' dangerouslySetInnerHTML={{__html: "To model the probability of the next word (<span class='par-scr'>w <span class='sub-scr'>{t,i}</span></span>) in the current document (t) based on past words(<span class='par-scr'>w <span class='sub-scr'>{t,1:i-1}</span></span>) in the document <span class='bold'> and the a user state (<span class='par-scr'>U <span class='sub-scr'>{1:t-1}</span></span>)</span>"}}>
                </p>
            </div>
            
            <p className='new-heading h2'>Background:</p>
            <p className='desc info body-copy'>
                Language modeling is fundamental to NLP, with many large transformer based models becoming widespread.
            </p>
            <div className='image-block fundamental'>
                <img src='./images/fundamental_LM.png' alt='models' />
            </div>
            
            <p className='new-heading h3'>So, What's missing?</p>
            <p className='desc info body-copy'>
                Large language models treat dependent inputs as independent even when they are not.
            </p>
            <div className='video-block'>
                <img src='./videos/gif_one.gif' className='gif-img' />
            </div>
            <p className='desc small'>
                <span className='left block body-copy'>
                    Additionally, the inherent higher order structure of language, which is words come from documents and documents come from humans, is not explicit in the language modeling tasks of large LMs.
                </span>
                
            </p>
            <p className='new-heading h3'>Task: Human Language Modeling (HuLM)</p>
            <p className='desc info body-copy'>
                <span className='left block'>
                    To address these gaps, we propose Human Language Modeling (HuLM), a language modeling task grounded in the "natural" generators of language, people.
                </span>
            </p>
            
            <div className='image desc block'>
                <p className='desc body-copy'>Building from the traditional language task, that is</p>
                <img className='medium' src='./images/tradi_lang_task.png' alt='Traditional Language task' />
            </div>
            <div className='image desc block'>
                <p className='desc body-copy'>In HuLM, we also condition on a user state</p>
                <img className='medium' src='./images/user_state.png' alt='User state' />
            </div>
            <div className='image desc block'>
                <p className='desc body-copy'>But, human states are somewhat stable but not entirely static.</p>
                <img className='width-control' src='./images/stable.png' alt='Stable' />
                <p className='info-alt'>{"(Washington Outsider, 2014)"}</p>
            </div>
            <div className='image desc block'>
                <p className='desc body-copy'>To account for this, we condition on a dynamic user state:</p>
                <img className='medium' src='./images/dynamic_user_state.png' alt='Dynamic User state' />
            </div>
                <p className='new-heading h3'>Method: Human-aware Recurrent Transformer (HaRT)</p>
            <div className='image desc block'>
                <p className='desc body-copy'>To address HuLM, we introduce HaRT: Human-aware Recurrent Transformer, an auto-regressive transformer with a recurrent user state:</p>
                <video ref={videoRef} autoPlay muted controls width="600px" >
                    <source src='./videos/video_transformer.mp4' type="video/mp4"/>
                </video>
            </div>
            <p className='new-heading h3'>State-of-the-Art Results</p>
            <div className='models-content'>
                <ModelsComponent showHeading={false} />
            </div>
        </div> }
    </div>

}

export default Description;