import React from 'react'
import parse from 'html-react-parser';

type TextData = {
    title?: string;
    desc?: string;
    items?: Array<{ id: string; title: string; desc: string }>;
};

type InfoBlockProps = {
    type: string;
    textData: TextData
}

function InfoBlock({ type, textData }: InfoBlockProps) {
    return (
        <section className='info-block'>
            <div className="info-block__container _container">
                {
                    type === 'legal' ? (
                        <>
                            {
                                textData?.items?.map(el => (
                                    <div className="info-block__item" key={el.id}>
                                        <h3>{el.title}</h3>
                                        <p>{parse(el.desc)}</p>
                                    </div>
                                ))
                            }
                        </>
                    ) : type === 'terms' ? (
                        <>
                            <h1>{textData?.title}</h1>
                            {textData?.desc && parse(textData?.desc)}
                        </>
                    ) : null
                }
            </div>
        </section>
    )
}

export default InfoBlock
