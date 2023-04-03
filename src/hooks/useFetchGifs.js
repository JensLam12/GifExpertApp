import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category) => {

    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const imgs = await getGifs(category);
        setImages(imgs);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
        // getGifs(category)
        //     .then( img => setImages(img) );
    }, []);

    return {
        images,
        isLoading
    }
}
