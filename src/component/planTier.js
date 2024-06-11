import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function PlanTier({ tierData }) {
    const { tier, price, ...rest } = tierData;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="tierBoxContainer col-md-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="tierBox">
                <h1 className="h6 tierName">{tier}</h1>
                <h2 className="tierPrice">${price}/month</h2>

                <ul className="list-unstyled my-5 text-small text-left">
                    {Object.entries(rest).map(([key, value]) => {
                        const iconColor = value[0] ? '' : '#999';
                        return (
                            <li key={key} className="mb-3" style={{ color: iconColor }}>
                                {value[0] ? <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px'}} /> : <FontAwesomeIcon icon={faTimes} style={{ marginRight: '10px', color: iconColor }} />}
                                {value[1]}
                            </li>
                        );
                    })}
                </ul>

                <button className="btn btn-primary btn-block" disabled={!isHovered}>BUTTON</button>
            </div>
        </div>
    );
}
