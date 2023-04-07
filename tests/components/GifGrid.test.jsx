import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <Gifrid />', () => {

    const category = 'One punch';

    test( 'Should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category} />);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText(category) );
    });

    test( 'Should show items when the images are loading', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://media1.giphy.com/media/3vAbCfUkafcwJPm9eD/giphy.gif?cid=2f445984lhyo340e7g6gcnzzc0dw3ru9fyho2ieuaxkd5osy&rid=giphy.gif&ct=g'
            },
            {
                id: 'ABC2',
                title: 'Saitama2',
                url: 'https://media3.giphy.com/media/cafch3iWRne5W/giphy-downsized-medium.gif?cid=2f445984lhyo340e7g6gcnzzc0dw3ru9fyho2ieuaxkd5osy&rid=giphy-downsized-medium.gif&ct=g'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} />);
        expect( screen.getAllByRole('img').length).toBeGreaterThan(1);
    });
});