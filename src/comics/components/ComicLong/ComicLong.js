import React from "react";

import PropTypes from "prop-types";
import * as _ from "lodash";
import sanitizeHtml from "sanitize-html";
import Star from "core/components/Star/Star";
import PrevNext from "core/components/PrevNext/PrevNext";
import publishedDate from "comics/publishedDate/publishedDate";
import "./ComicLong.css";

const ComicLong = ({comic, isFavorited, toggleFavorite, onPrevClick, onNextClick}) => {
    const {title, price, published, cover='https://via.placeholder.com/150', description, creators} = comic;
    const handleClick = () => { toggleFavorite(comic); };

    return (
        <div className='comic-long'>
                <div className='comic-long-thumbnail'>
                    <img data-testid='cover' src={cover} alt='cover'/>
                </div>

                <div className='comic-long-content'>
                    <div className="comic-long-favorite-container">
                        <Star onClick={handleClick} checked={isFavorited} className='u-hoverable'/>
                    </div>

                    <div className='t-title' data-testid='title'>{title}</div>
                    <br />
                    <div className='t-label'>Price</div>
                    <div className='t-label-text' data-testid='price'>{price} $</div>
                    <div className='t-label'>Published:</div>
                    <div className='t-label-text' data-testid='published'>{publishedDate(published, '-')}</div>
                    <div className='t-label'>Description:</div>
                    <div className='t-long-text' data-testid='description' dangerouslySetInnerHTML={{__html: sanitizeHtml(description)}} />

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
        return (<div className='comic-long-creators-container-role' key={role}>
            <div className='t-label'>{_.capitalize(role)}:</div>
            <div className='t-label-text'>{names}</div>
        </div>);
    });
}

ComicLong.propTypes = {
    comic: PropTypes.object.isRequired,
};

export default ComicLong;