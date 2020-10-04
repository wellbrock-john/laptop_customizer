import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import FeatureItemOption from './FeatureItemOption';

export default class FeatureItem extends Component {

    generateOptionList = () => {
        return this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <FeatureItemOption 
                key={itemHash}
                id={itemHash}
                feature={this.props.name}
                itemHash={itemHash}
                item={item}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
              />
            );
        });
    }

    render( ) {
        const { name, featureHash } = this.props;
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{name}</h3>
                </legend>
                {this.generateOptionList()}
            </fieldset>
        )
    }
}