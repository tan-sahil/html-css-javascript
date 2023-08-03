// using prop we can check the validator properties..
import { checkPropTypes, string } from 'prop-types'
import {creatClass} from 'react'
const summary = creatClass({
    display: "Summary",
    propType : {
        ingredients: checkPropTypes.number,
        steps : checkPropTypes.number,
        heading: checkPropTypes.string
        
    },
    getDefaultProps() {
        return {ingredients: 0,
            steps: 0,
            heading: ['recipe']

        }
            

        
    },
    render(){
        const {ingredients, steps, heading} = this.props
        return(
            <div className = "summary">
                <h1>{heading}</h1>
                <p>
                    <span>{ingredients} Ingredients</span>
                    <span>{steps} steps</span>
                </p>
            </div>
            
            
        )
    }
});

//  can be done by creating a validator and validator will be a function that will return

const summary2 = creatClass({
    display: "summary2",
    propTypes: {
        ingredients: propTypes.number,
        steps: propTypes.number,
        title: (props, propName) => 
            (typeof props[propName] !== string)?  new Error('title must be string') :
                (props[propName].length > 20) ? new Error('title is over 20 characters'): null
        
        
    }
})
// handeled in a way where erroe are thrown if issue and null when no issue

// code to check that props are in required format are not

// import {createClass, checkPropsType} from 'react';

const summary3 = creatClass({
    display: 'Summary',
    propTypes: {
        ingredients : checkPropTypes.number,
        tests: checkPropTypes.number,
        title: checkPropTypes.string
    }, 
    getDefaultProps() {
        ingredients = 0,
        steps = 0,
        title = ['recipe']
    },

    render(){
        const [ingredients, steps, title] = this.props;
        <div className = "summary">
            <h1>{title}</h1>
            
        </div>
    }
})