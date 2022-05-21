import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ModelsComponent from '../models';
import HulmBlock from './hulm-block';
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
        scrollIntoView();
    }, [])

    const scrollIntoView = () => {
        const hashParameter = window.location.hash;

        if(hashParameter) {
            const element = document.querySelector(hashParameter);
            element && element.scrollIntoView({
                behavior: 'smooth'
            }) ;
        }
    }

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
                    <a href='https://aclanthology.org/2022.findings-acl.52/' target="_blank">
                        Read paper
                    </a>
                </p>
            </div>
            }
            <div className='goal-section'>
                <h2 className='lan-heading h2 tagline'>
                    Language Modeling as a task grounded in the "natural"  generators of language, people.
                </h2>
                <p className='new-heading h2'>Objective</p>
                <p className='body-copy note' dangerouslySetInnerHTML={{__html: "To model the probability of the next word <span class='par-scr'>w <span class='sub-scr'>{t,i}</span></span> in the current document <span class='par-scr'>t </span> based on past words <span class='par-scr'>w <span class='sub-scr'>{t,1:i-1}</span></span> in the document <span class='bold'> and a user state <span class='par-scr'>U <span class='sub-scr'>{1:t-1}</span></span></span>"}}>
                </p>
                <div className='parent-image'>
                    <img className='height-control' src='./images/goal.png' alt='Goal' />
                </div>
                <div className='child-image'>
                    <img className='overlay' src='./images/overlay.png' alt='' />
                </div>
            </div>
            
            <p className='new-heading h2'>Background</p>
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
            <div className='desc small'>
                <div className='left block body-copy'>
                    Additionally, the inherent higher order structure of language, 
                    which is words come from documents and documents come from humans, 
                    is not explicit in the language modeling tasks of large LMs.
                </div>
                <br />
                <div className='hulm-block'>
                    <HulmBlock />
                </div>
                
            </div>
            <p id='hulm' className='new-heading h3'>Task: Human Language Modeling (HuLM)</p>
            <p className='desc info body-copy'>
                <span className='left block'>
                    To address the above gaps, we propose Human Language Modeling (HuLM), a language modeling task grounded in the "natural" generators of language, people.
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
                <p className='desc body-copy'>
                    To address HuLM, we introduce HaRT: Human-aware Recurrent Transformer, an auto-regressive transformer with a recurrent user state.
                    HaRT builds on the recurrent Transformer approaches from <a href='https://arxiv.org/abs/2008.07027' target='_blank' className='text-link'>Yoshida et al., 2020</a> and Transformer-XL (<a href='https://aclanthology.org/P19-1285/' className='text-link' target='_blank'> Dai et al., 2019</a>).
                </p>
                <video ref={videoRef} autoPlay muted controls width="600px" >
                    <source src='./videos/video_transformer.mp4' type="video/mp4"/>
                </video>
            </div>
            <div className='pre-training'>
                <p className='new-heading h3'>
                    Pre-training
                </p>
                <p className='body-copy'>
                    We pre-train HaRT for the HuLM task on two datsets
                </p>
                <ul>
                    <li>
                        HuLM Corpus (HLC) from the paper: Twitter and Facebook datasets which we cannot release  for privacy considerations.
                    </li>
                    <li>
                        The Twitter <Link className='text-link' to="/dataset">dataset</Link> (HaRT<span className='sub'>Twt</span>) from our <a href='https://aclanthology.org/2022.findings-acl.52/' className='text-link' target='_blank'>paper</a> to release the <a href='https://drive.google.com/uc?export=download&id=1MGJN1Fp21Q7lPbICNx2_D5qZg8gG0Qla' className='text-link' target='_blank'>model</a> publicly.
                    </li>


                </ul>
            </div>
            <p className='new-heading h2'>State-of-the-Art Results</p>
            <p className='body-copy'>
                For comparison, we evaluate HaRT<span className='sub'>Twt</span> on the language modeling task (over test data from the paper and Twitter-only test data) and document-level fine-tuning task.
                HaRT<span className='sub'>Twt</span> has a slight difference in the results but is in alignment with the full HaRT model (pre-trained on HLC). HaRT<span className='sub'>Twt</span> training and evaluations were run on two DGX A100 GPUs. 
            </p>
            <div className='models-content'>
                <ModelsComponent showHeading={false} />
            </div>
        </div> }
    </div>

}

export default Description;