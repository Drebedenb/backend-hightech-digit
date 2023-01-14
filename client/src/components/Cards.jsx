import React, {useContext, useState} from 'react';
import Card from "./Card/Card";
import MySelect from "../UI/MySelect/MySelect";
import Form from "./Form/Form";
import {ProductsContext} from "../App";

const Cards = () => {
    const {cards, setCards} = useContext(ProductsContext);

    function addCard(card) {
        setCards([card, ...cards]);
}

    function deleteCard(id) {
        setCards(cards.filter(item => item.id !== id));
    }

    function handler(e, newCard) {
        e.preventDefault();
        addCard({id: Date.now(), ...newCard});
    }
    return (
        <div className="w-50">
            <h1 className="mt-5">List of products</h1>
            <Form handler={handler}/>
            <MySelect/>
            {cards.map(item => <Card post={item} deleteCard={deleteCard} key={item.id}/>)}
        </div>
    );
};

export default Cards;