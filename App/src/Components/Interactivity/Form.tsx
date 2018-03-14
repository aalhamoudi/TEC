import React from 'react';


interface FormProps {

}
export default class Form extends React.Component<FormProps, {}> {
    render() {
        return (
            <form>

            </form>
        );
    }
}


interface FieldProps {
    type: string;
    title: string;
    
}
export class Field extends React.Component<FieldProps, {}> {
    render() {
        return (
            <div>

            </div>
        );
    }
}
