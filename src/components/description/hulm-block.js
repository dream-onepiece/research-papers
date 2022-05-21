const HulmBlock = () => {
    return <>
        <div className='left block body-copy'>
                    Indeed different ways of incorporating human information into NLP models have recently been shown to improve accuracy on many NLP tasks. 
                    HuLM brings together ideas from human factor inclusion/adaptation and personalized modeling into the framework of large pre-trained models.
                    While not the primary goal, human language modeling may yield effective approaches to extend the context during language modeling. 
                    So broadly, HuLM relates to 3 areas of prior work.
                </div>
                <br />
                    <div className='hulm-image'>
                        <img className='medium-large' src='./images/hulm.PNG' alt='' />
                    </div>
                    
                    <div className='links'>
                        <div className="content-block">
                            <div className="image-box purple">
                                Integrating human context: Social and human factors
                            </div>
                            <div className='link-block purple'>
                                <a href='https://aclanthology.org/P15-1073/' target='_blank'>Hovy, 2015</a>
                                <a href='https://aclanthology.org/D17-1119/' target='_blank'>Lynn et al., 2017</a>
                                <a href='https://aclanthology.org/S19-1015/' target='_blank'>Huang and Paul, 2019</a>
                                <a href='https://aclanthology.org/2021.naacl-main.49/' target='_blank'>Hovy and Yang, 2021</a>
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="image-box green">
                                Personalized Language Models
                            </div>
                            <div className='link-block green'>
                                <a href='https://aclanthology.org/2020.lrec-1.299/' target='_blank'>King & Cook, 2020</a>
                                <a href='https://aclanthology.org/P18-2111/' target='_blank'>Jaech & Ostendorf, 2018</a>
                                <a href='https://aclanthology.org/2021.findings-emnlp.253/' target='_blank'>Matero et al., 2021</a>
                                <a href="https://ieeexplore.ieee.org/document/8970806" target='_blank'>Delasalles et al., 2019</a>
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="image-box blue">
                            Longer context enabled LMs
                            </div>
                            <div className='link-block blue'>
                                <a href='https://aclanthology.org/P19-1285/' target='_blank'>Dai et al., 2018</a>
                                <a href='https://arxiv.org/abs/2004.05150' target='_blank'>Betalgy et al., 2020</a>
                                <a href='https://arxiv.org/abs/2002.08909' target='_blank'>Guu et al., 2020</a>
                                <a href='https://arxiv.org/abs/2008.07027' target='_blank'>Yoshida et al., 2020</a>
                            </div>
                        </div>
                    </div>
    </>
}

export default HulmBlock;