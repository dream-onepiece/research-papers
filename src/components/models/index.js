import CustomTable from "../commons/table";

const ModelsComponent = () => {
    return <div className="models component">
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
}

export default ModelsComponent;