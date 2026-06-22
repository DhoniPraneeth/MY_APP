import { compose, pipe } from 'lodash/fp';

function FunctionalComposing() {
    const trim = (input) => input.trim();
    const toUpperCase = (str) => str.toUpperCase();
    const wrap = type=>str => `<${type}>${str}</${type}>`;
    const wrapInDiv = str => `<div>${str}</div>`;

    const t1 = compose(wrapInDiv, toUpperCase, trim);
    const t2 = pipe(trim, toUpperCase, wrapInDiv);
    const t3=pipe(trim,toUpperCase,wrap("span"));
    return (
        <>
            <h3>Functional Composing</h3>
            {t1(' javascript ')}
             <br></br>
            {t2('  react ')}
            <br></br>
            <h5>After curring</h5>
            {t3(' Redux ')}
        </>
    );
}

export default FunctionalComposing;