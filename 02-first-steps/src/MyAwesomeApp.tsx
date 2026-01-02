// export function MyAwesomeApp(){
//     return (
//         <>
//             <h1>Gabriel</h1>
//             <h3>Cabalceta</h3>
//         </>     
//     )
// }

const firstName = 'Gabriel';
const lastName = 'Cabalceta';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada',
};

export const MyAwesomeApp = () => {

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p>{JSON.stringify(address)}</p>
        </>
    );
};