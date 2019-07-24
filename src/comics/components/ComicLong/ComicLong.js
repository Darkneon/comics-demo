import React from "react";

import PropTypes from "prop-types";
import Star from "../../../core/components/Star/Star";
import * as _ from 'lodash';
import './ComicLong.css';
import sanitizeHtml from 'sanitize-html';
import PrevNext from "../../../core/components/PrevNext/PrevNext";

const ComicLong = ({comic, isFavorited, toggleFavorite, onPrevClick, onNextClick}) => {
    const {title, price, published, cover='https://via.placeholder.com/150', description, creators} = comic;
    const handleClick = () => { toggleFavorite(comic); };

    return (
        <div className='comic-long'>
                <div className='comic-long-thumbnail'>
                    <img data-testid='cover' src={cover} />
                </div>

                <div className='comic-long-content'>
                    <div data-testid='title'>{title}</div>
                    <div>Price</div>
                    <div data-testid='price'>{price} $</div>
                    <div>Published:</div>
                    <div data-testid='published'>{published}</div>
                    <div>Description:</div>
                    <div data-testid='description' dangerouslySetInnerHTML={{__html: sanitizeHtml(description)}} />

                    <Star onClick={handleClick} checked={isFavorited}>Add to </Star>

                    <div className='comic-long-creators-container'>
                        { renderCreators(creators) }
                    </div>

                    <div className='comic-long-prev-next'>
                        <PrevNext onPrevClick={onPrevClick} onNextClick={onNextClick} />
                    </div>
                </div>
        </div>
    );
};

function renderCreators(creators) {
    const roles = _.keys(creators);

    return roles.map(role => {
        const names = _.values(creators[role]).map(creator => creator['name']).join(',');
        return (<div className='comic-long-creators-container-role'>
            <div>{_.capitalize(role)}:</div>
            <div>{names}</div>
        </div>);
    });
}

ComicLong.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicLong;