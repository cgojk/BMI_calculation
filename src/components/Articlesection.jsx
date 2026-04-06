import React from "react";

import image from "../assets/image-man-eating.webp"

export default function Articlesection(){
    return (
        <section className="article-section container">
            <div className="article-section-content">
                <div class="article-section-image-wrapper">
                    <img src={image} alt="illustration" class="article-section-image"/>
                </div>
                <div class="article-section-text">
                    <h2 className="article-section-title">What your BMI results means</h2>
                    <p className="article-section-description">
                       A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                        Maintaining a healthy weight may lower your chances of experiencing
                         health issues later on, such as obesity and type 2 diabetes. 
                         Aim for a nutritious diet with reduced fat and sugar content, 
                         incorporating ample fruits and vegetables. Additionally,
                          strive for regular physical activity, 
                       ideally about 30 minutes daily for five days a week.
                    </p>
                </div>
            </div>
        </section>
    );
}