import React from "react";
import 'jest';
import {cleanup, render, fireEvent} from "@testing-library/react";
import Icon from "./Icon";


const  iconType = 'arrow-left';

afterEach(cleanup);

describe('<Icon />', () => {
    describe('<Icon type={} />', () => {
        it('should render missing text if type is empty', async () => {
            const {getByTestId} = render(<Icon type='' />);
            expect(getByTestId('icon').textContent.toLowerCase()).toContain('missing');
        });

        it('should render a glyth', async () => {
            const {getByTestId} = render(<Icon type={iconType}/>);
            expect(getByTestId('icon').textContent).not.toBe('');
        });
    });

    describe('<Icon color={} />', () => {
        it('should set color in inline style', async () => {
            const color = 'red';
            const {getByTestId} = render(<Icon type={iconType} color={color} />);
            expect(getByTestId('icon').style.color).toContain(color);
        });
    });

    describe('<Icon onClick={} />', () => {
        it('should trigger onClick handler', async () => {
            const onClickHandler = jest.fn();
            const {getByTestId} = render(<Icon type={iconType} onClick={onClickHandler} />);
            fireEvent.click(getByTestId('icon'));
            fireEvent.click(getByTestId('icon'));
            fireEvent.click(getByTestId('icon'));
            expect(onClickHandler).toHaveBeenCalledTimes(3);
        });
    });
});