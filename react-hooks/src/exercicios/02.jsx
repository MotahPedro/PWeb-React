import * as React from 'react'

function Greeting ({initialName}){
    //const name = ''
    // const [name, setName] = React.useState('');
    const [name, setName] = React.useState(
        // window.localStorage.getItem('name') ?? initialName

        // () => {
        //     console.count('Leu localStorage')
        //                 return window.localStorage.getItem('name') ?? initialName
        // }

        () => window.localStorage.getItem('name') ?? initialName
    );

    const [asterisco, setAsterisco] = React.useState('*')

    React.useEffect(() => {
        window.localStorage.setItem('name', name)
        console.count('Atualizou')
    }, [name]) // VETOR DE DEPENDÊNCIAS
    // O vetor de dependências permite "filtrar" quais variáveis
    // de estado serão "vigiadas" em busca de alterações para
    //executar o efeito colateral

    function handleChange(event){
        setName(event.target.value);
    }

    return (

        <div>
            <form>
                <label htmlFor="name" onClick={() => setAsterisco(asterisco + '*')}>Nome: {asterisco} </label>
                <input onChange={handleChange} id="name"/>
            </form>
            {name ? <strong> Olá {name}</strong> : 'Por favor, informe seu nome'}
        </div>
    )
}

function Exercicio02(){
    return <Greeting/>
}

export default Exercicio02