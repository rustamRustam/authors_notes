import * as React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
    prop1: string;
}

interface State {
    znach: string;
}

class TypeComponent extends React.Component<Props, State> {

    state: State ={
        znach: ''
    }

    render() {

        return (
            <div>
                <h4>Hellow {this.props.prop1}</h4>
            </div>
        );
    }
}

export default TypeComponent;
