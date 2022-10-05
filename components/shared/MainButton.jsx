import React from 'react';

const MainButton = ({value,styleClass}) => {
    return (
        <a
        href="/contact"
        className="p-3 bg-red-500 rounded-md text-white"
      >
        Contactez-nous
      </a>
    );
}

export default MainButton;
