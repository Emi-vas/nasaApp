import React from 'react';

const MarsIcon = ({ setListSelected, name }) => {
    return (
        <div className={`marsIcon marsIcon--${name}`}  onClick={() => setListSelected(name)}>
            <i className="fa-brands fa-galactic-republic"></i>
            <i className="fa-solid fa-camera"></i>
        </div>
    );
};

export default MarsIcon;