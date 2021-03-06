import React from "react";
import { Link } from 'react-router-dom';
import './css/Banner.scss';

export class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            height: "530px"
        }
    }
    
    updateDimensions() {
        let containerHeight = document.getElementsByClassName('banner-standard')[0].clientWidth * 0.47;
        this.setState({
            height: containerHeight
        });
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render () {
        const { imgURL, url, title, translucent } = this.props;
        if (translucent === true) {
            return (
                <Link to={url} style={{textDecoration: "none"}}>
                    <div className="banner-standard banner-standard-white" style={{height: this.state.height + 'px'}}>
                        <div className="banner-image" style={{backgroundImage: 'url("' + require(`${imgURL}`) + '")'}}>
                            <div className="translucent-overlay"></div>
                            <div className="banner-text">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        } else {
            return (
                <Link to={url} style={{textDecoration: "none"}}>
                    <div className="banner-standard banner-standard-black" style={{height: this.state.height + 'px'}}>
                        <div className="banner-image" style={{backgroundImage: 'url("' + require(`${imgURL}`) + '")'}}>
                            <div className="banner-text-black">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}