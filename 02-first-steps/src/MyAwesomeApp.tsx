// export function MyAwesomeApp(){
//     return (
//         <>
//             <h1>Gabriel</h1>
//             <h3>Cabalceta</h3>
//         </>     
//     )
// }

import type { CSSProperties } from "react";

const firstName = 'Gabriel';
const lastName = 'Cabalceta';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada',
};

const myStyles: CSSProperties = {
    backgroundColor: '#FAFAFA',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 30,
};

export const MyAwesomeApp = () => {

    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-tittle">{firstName}</h1>
            <h3>{lastName}</h3>

            <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    );
};