import React from 'react';

class Genre extends React.Component {
    constructor(props) {
        super(props);

        this.toogleActive = props.toogleActive;
    }

    setActive = () => {
        this.toogleActive(this.props.data.id);
    };

    render() {
        const {
            isActive,
            data: {
                id,
                name,
            },
        } = this.props;

        return (
            <div className={'genre' + (isActive ? ' active' : '')} onClick={() => this.setActive()}>
                {name}
            </div>
        );
    }
}

export default Genre;
