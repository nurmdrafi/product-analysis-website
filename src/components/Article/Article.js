import React from 'react';

const Article = ({article}) => {
const {question, answer} = article;

    return (
        <div>
            <h2>{question}</h2>
            {
                answer.map((ans, idx) => <p key={idx}>{ans}</p>)
            }
        </div>
    );
};

export default Article;