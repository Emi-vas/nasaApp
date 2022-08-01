import React from 'react';

const MarsIcon = ({ pos, setListSelected, name }) => {
    return (
        <div className='marsIcon' style={{ top: pos[0], left: pos[1] }} onClick={() => setListSelected(name)}>
            <i className="fa-brands fa-galactic-republic"></i>
            <i className="fa-solid fa-camera"></i>
        </div>
    );
};

export default MarsIcon;