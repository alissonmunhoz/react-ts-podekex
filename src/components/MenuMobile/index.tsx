import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

interface MenuProps {
    menuIsVisible: boolean
    setMenuIsVisible?: boolean
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuProps) {
    // useEffect(() => {
    //     document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    // }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <nav>
                <NavLink to="/" title="Home">
                    Home
                </NavLink>
                <NavLink to="/pokedex" title="Pokedex">
                    Pokédex
                </NavLink>
            </nav>
        </Container>
    )
}