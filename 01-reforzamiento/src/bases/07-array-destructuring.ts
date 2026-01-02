const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = characterNames;

console.log({p3});

const returnsArraysFn = () => {
    return ['ABC', 123] as const
}

const [letras, numeros] = returnsArraysFn();

console.log(letras, numeros + 2)

//Tarea:

const useState = (value: string) => {
    return [value, (newValue: string) => {
        console.log(newValue)
    } ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta')