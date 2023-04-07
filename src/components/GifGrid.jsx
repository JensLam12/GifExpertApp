import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);

    return(
        <>
            <h3>{ category }</h3>

            {
                isLoading &&
                    <h2>Loading...</h2>
            }

            <div className='card-grid'>
                { images.map( (img) => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                        // title={img.title}
                        // url={img.url}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}