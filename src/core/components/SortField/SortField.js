import React, {useState} from "react";
import * as _ from 'lodash';

import PropTypes from "prop-types";


import {Dropdown} from 'reactjs-dropdown-component'

import './SortField.css';

const ordersList = [
    {
        id:
            0, key:
            'order', title:
            'Asc',

    },

    {
        id:
            1, key:
            'order', title:
            'Desc'
    },

];

const SortField = ({title, onChange, optionsList = {}}) => {
    const [options, setOptions] = useState(optionsList);
    const [orders, setOrders] = useState(ordersList);
    const [optionSelected, setOptionSelected] = useState({});
    const [orderSelected, setOrderSelected] = useState({});

    if (_.isEmpty(orderSelected)) {
        const result = resetThenSet(ordersList[0].id, ordersList[0].key, ordersList);
        setOrderSelected(result.selected);
        setOrders(result.remaining);
    }

    const handleFieldChange = (id, key) => {
        const result = resetThenSet(id, key, optionsList);
        setOptionSelected(result.selected);
        setOptions(result.remaining);
        onChange(id, key, result.selected, orderSelected);
    };

    const handleOrderChange = (id, key) => {
        const result = resetThenSet(id, key, ordersList);
        setOrderSelected(result.selected);
        setOrders(result.remaining);
        onChange(id, key, optionSelected, result.selected);
    };

    return (
        <div className="sort-field">
            <Dropdown
                title={title}
                list={options}
                resetThenSet={handleFieldChange}
            />
            <Dropdown
                title='Asc'
                list={orders}
                resetThenSet={handleOrderChange}
            />

        </div>
    );
};

function resetThenSet(id, key, items) {
    return {
        selected: items.find(item => item.id === id),
        remaining: items.filter(item => item.id !== id)
    };
}


export default SortField;