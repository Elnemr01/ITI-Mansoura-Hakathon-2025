import React, { useContext, useEffect, useState } from 'react'
import './filterStyle.css'
import { specialityData } from '../../assets/assets_frontend/assets';
import { OurContext } from '../../contextAPI/FilterName';

const FilterBySpeciality = () => {
    const [speciality, setSpecialty] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const { filterName, setFilter } = useContext(OurContext);

    useEffect(() => {
        setSpecialty(specialityData.map((e) => e.speciality));
    }, [])

    return (
        <ul className="filteration">
            <p className='filter-btn' onClick={() => setShowFilter(!showFilter)}>filters</p>
            {
                speciality.map((e, i) => {
                    return (
                        <li
                            key={i}
                            className={`animated ${filterName === e ? 'choicen' : ''} ${!showFilter ? 'hidden' : 'block'}`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                            onClick={() => setFilter(e)}
                        >
                            {e}
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default FilterBySpeciality

