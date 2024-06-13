import React from 'react';
import './Style/Cards.css'

const Cards = ({ arrObj }) => {
    return (
        <div className='container-fluid'>
            
            <div className="row row-cols-12 row-cols-md-3 g-4">
                {arrObj.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div className="card h-100" id="card" style={{ width: "20rem" }}>
                                    <div className="card-body">
                                        <h6 className='text-muted text-center' >{item.id}</h6>
                                        <h1 className="card-header text-center" id='title'>{item.price}</h1>
                                        <ul className="card-list">
                                            <p><span><i className="fa fa-check"></i></span>  {item.user}</p>
                                            <p><span><i className="fa fa-check"></i></span>50GB Storage</p>
                                            <p><span><i className="fa fa-check"></i></span>Unlimited Public Project</p>
                                            <p><span><i className="fa fa-check"></i></span>Community Access</p>
                                            <p className={item.projectType}><span><i className={item.proIcon}></i></span>Unlimited Private Project</p>
                                            <p className={item.support}><span><i className={item.supIcon}></i></span>Dedicated Phone support</p>
                                            <p className={item.domain}><span><i className={item.domIcon}></i></span>Free Subdomain</p>
                                            <p className={item.reporttype}><span><i className={item.repIcon}></i></span>Monthly Status Reports</p>
                                        </ul>
                                        <div className="d-grid col-12 mx-aut">
                                            <button className="btn btn-primary" type="button">BUTTON</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </>
                    )
                })}

            </div>

        </div>

    );
};

export default Cards;