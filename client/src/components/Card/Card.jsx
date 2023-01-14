import React from 'react';

const Card = ({post, deleteCard}) => {
    const name = post.name;
    const price = post.price;
    const id = post.id;

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    {/*<img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"*/}
                    {/*     width="700" height="500" loading="lazy"/>*/}
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">{name}</h1>
                    <p className="lead">Your new {name} by {price}!</p>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy</button>
                        <button onClick={() => deleteCard(id)} type="button" className="btn btn-outline-secondary btn-lg px-4">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;