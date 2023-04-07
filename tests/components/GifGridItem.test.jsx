import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe( 'Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWIwMThlNmQ2MjhlNmFlZmE2NmFhNDIzNDc0MThmYjNmNDk5MDU4ZCZjdD1n/yo3TC0yeHd53G/giphy.gif';

    test( 'should be match with snapshot', () => {
        const { container } = render(
            <GifGridItem
                title = {title}
                url={url}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test( 'should show image with url and indicated alt', () => {
        render( <GifGridItem title = {title} url={url} /> );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test( 'should show title in component', () => {
        render( <GifGridItem title = {title} url={url} /> );
        expect(screen.getByText(title)).toBeTruthy();
    });

});