import React, {useState} from "react";
import * as _ from "lodash";
import {Dropdown} from "reactjs-dropdown-component"
import ordersList from "./ordersList";
import "./SortField.scss";

const SortField = ({selectedOption, selectedSort, onChange, optionsList = {}}) => {
    const [options, setOptions] = useState(optionsList);
    const [orders, setOrders] = useState(ordersList);
    const [optionSelected, setOptionSelected] = useState({});
    const [orderSelected, setOrderSelected] = useState({});

    if (_.isEmpty(optionSelected)) {
        populateDefaultOptions(options, selectedOption, setOptions, setOptionSelected);
    }

    if (_.isEmpty(orderSelected)) {
        populateDefaultOrder(ordersList, selectedSort, setOrders, setOrderSelected)
    }

    const handleFieldChange = (id, key) => {
        const updated = updateDropdown(id, key, optionsList, setOptions, setOptionSelected);
        onChange(id, key, updated.selected, orderSelected);
    };

    const handleOrderChange = (id, key) => {
        const updated = updateDropdown(id, key, ordersList, setOrders, setOrderSelected);
        onChange(id, key, optionSelected, updated.selected);
    };

    return (
        <div className="sort-field t-select-text">
            <Dropdown
                title={optionSelected.title}
                list={options}
                resetThenSet={handleFieldChange}
            />
            <Dropdown
                title={orderSelected.title}
                list={orders}
                resetThenSet={handleOrderChange}
            />

        </div>
    );
};

function populateDefaultOptions(optionsList, selectedOption, setOptions, setOptionSelected, ) {
    const option = optionsList.find(x => x.id === selectedOption);
    updateDropdown(option.id, option.key, optionsList, setOptions, setOptionSelected);
}

function populateDefaultOrder(ordersList, selectedOrder, setOrders, setOrderSelected) {
    const order = ordersList.find(x => x.id === selectedOrder);
    updateDropdown(order.id, order.key, ordersList, setOrders, setOrderSelected);
}

function updateDropdown(id, key, list, setList, setSelected, ) {
    const update = resetThenSet(id, key, list);
    setSelected(update.selected);
    setList(update.remaining);
    return update;
}

function resetThenSet(id, key, items) {
    return {
        selected: items.find(item => item.id === id),
        remaining: items.filter(item => item.id !== id)
    };
}


export default SortField;