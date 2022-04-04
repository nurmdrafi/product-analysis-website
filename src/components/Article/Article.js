import React from 'react';

const Article = ({article}) => {
const {question, answer} = article;

    return (
        <div>
            <h2 className='pt-3 text-primary text-opacity-75'>{question}</h2>
            {
                answer.map((ans, idx) => <p key={idx}>{ans}</p>)
            }
        </div>
    );
};

export default Article;