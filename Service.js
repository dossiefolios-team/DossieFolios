import React, { Component } from 'react';
import './Service.css'
class Service extends Component
{
    render()
    {
        const sections=[<Icons myicon={iconObj[0].icon} mytitle={iconObj[0].title} mydiscription={iconObj[0].description}/>,
                        <Icons myicon={iconObj[1].icon} mytitle={iconObj[1].title} mydiscription={iconObj[1].description}/>,
                        <Icons myicon={iconObj[2].icon} mytitle={iconObj[2].title} mydiscription={iconObj[2].description}/>,
                        <Icons myicon={iconObj[3].icon} mytitle={iconObj[3].title} mydiscription={iconObj[3].description}/> 
                    ];
                    
        return(
                <div className="services">
                   <h3>Features</h3>
                   <h2>This is what we can do for you</h2>
                   <div className="row">
                        <div className="single-service">
                            {sections[0]}
                        </div>
                        <div className="single-service">
                            {sections[1]}
                        </div>
                        <div className="single-service">
                            {sections[2]} 
                        </div>
                        <div className="single-service">
                            {sections[3]}
                        </div>
                   </div>    
                </div>
          );
    }
}
const iconObj =[
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title: 'Responsive',
        description: 'Looks Great On Any Screen Size'
    },
    {
        icon: <ion-icon name="pulse"></ion-icon>,
        title: 'Visitor Analytics',
        description: 'Update You With Accurate Analytics'
    },
    {
        icon: <ion-icon name="thumbs-up"></ion-icon>,
        title: 'Integration',
        description: 'Social Media Integration'
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title: 'Fast Loading',
        description: 'I moustache you a question....'
    }
];

class Icons extends Component
{
    render()
    {
        return(
            <div>
                <span>{this.props.myicon}</span>
                <h4>{this.props.mytitle}</h4>
                <p>{this.props.mydiscription}</p>
            </div>
        );
    }
}
export default Service