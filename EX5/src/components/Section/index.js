import React from 'react';
import classNames from 'classnames';
import './section.css';

const Section = ({ children }) => (
    <div className={classNames(['raised-2','section', classNames])}>
        { children }
    </div>
)

export default Section;