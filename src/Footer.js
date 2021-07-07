import react from 'react';

const Footer =() =>{
    let year = new Date().getFullYear();

    return(
        <>
            <footer>
                <h3>copyright © {year}</h3>
            </footer>
        </>
    );
}

export default Footer;