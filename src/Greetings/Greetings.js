import React from "react";

const Greetings = ({ lang, children }) => {
    let greeting = '';
    switch (lang) {
        case 'de':
            greeting = 'Hallo ';
            break;

            case 'es':
            greeting = 'Hola ';
            break;

            case 'en':
            greeting = 'Hello ';
            break;

            case 'fr':
            greeting = 'Bonjour ';
            break;

            case 'pt':
            greeting = 'Bom-dia ';
            break;

            default:
                greeting = 'Bonjour';
                break;
    }
    return (
        <div>
        {greeting} 
        {children}
        </div>
    );
}


/*
const Greetings = function (props){
    let greetings = '';
    if(props.lang === 'fr' ) {
         greetings = 'Bonjour';   
    } else if(props.lang ==='en') { 
        greetings = 'Hello';
    }else if(props.lang ==='de'){
        greetings = 'Hallo';
    } 
    
    return (
        <>
        <h1>{greetings} {props.children}</h1>
        </>
    );

    };

*/




export default Greetings;