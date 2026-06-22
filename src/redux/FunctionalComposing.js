import { compose, pipe } from 'lodash/fp';

function FunctionalComposing() {
    const trim = (input) => input.trim();
    const toUpperCase = (str) => str.toUpperCase();
    const wrapInDiv = (str) => <div>{str}</div>;

    const t1 = compose(wrapInDiv, toUpperCase, trim);
    const t2 = pipe(trim, toUpperCase, wrapInDiv);

    return (
        <>
            {t1(' javascript ')}
            {t2('  react ')}
        </>
    );
}

export default FunctionalComposing;