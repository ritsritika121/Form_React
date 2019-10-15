import React from 'react';
import { connect } from 'react-redux';
import { AddData } from '../action';
import { Field, reduxForm } from 'redux-form';

class FormAdd extends React.Component {

    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                <div className="header">
                {error}
                </div>
                </div>
            );
        }
    }



    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.touched && meta.error?'error':''}`
           return (
               <div className={className}>
                 <label>{label}</label>
                   <input {...input} />
                   {this.renderError(meta)}
               </div>
           );  
    }

    onSubmit = (formValues) => {

          this.props.AddData(formValues.Name, formValues.Email);
          this.props.history.push('/');
    
        console.log(formValues);
    }


    render() {

;        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="Name" component={this.renderInput} label="Name"/>
                    <Field name="Email" component={this.renderInput} label="Email"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }

}

const validate = (formValues) => {
    const error={};

    if(!formValues.Name){
        error.Name= "U must enter Name"
    }

    if(!formValues.Email){
        error.Email="Enter the Email"
    }

    return error;
}



const mapStateToProps = (state) => {
    return { Data: state.data }
}

export default connect(mapStateToProps, {AddData}) (reduxForm( { form:"streamCreate", validate })(FormAdd));
