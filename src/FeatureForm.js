import React, { Component } from 'react';
import FeatureItem from './FeatureItem';

export default class FeatureForm extends Component {
    getFeatureItemList = () => {
        return Object.keys(this.props.features).map((feature, idx) => {

            const featureHash = feature + '-' + idx;
        
            return (
              <FeatureItem 
                key={featureHash}
                featureHash={featureHash}
                name={feature}
                options={this.props.features[feature]}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
              />
            );
        
          });
    }

    render( ) {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatureItemList()}
            </form> 
        )
    }
}