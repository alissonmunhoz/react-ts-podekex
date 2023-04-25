import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { MenuMobile } from "../MenuMobile";
import {
    Container,
    FlexBox,
    Header, Link, LogoPoke
} from './styles'

import { FiAlignJustify } from "react-icons/fi";

export function HeaderPoke({ }) {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <>
            <Container >
                <MenuMobile
                    menuIsVisible={menuIsVisible}
                    setMenuIsVisible={setMenuIsVisible}
                />
                <Header setMenuIsVisible={setMenuIsVisible}>
                    <NavLink to="/">
                        <LogoPoke />
                    </NavLink>
                    <nav>
                        <NavLink to="/" title="Home">
                            Home
                        </NavLink>
                        <NavLink to="/pokedex" title="Pokedex">
                            Pokédex
                        </NavLink>
                    </nav>
                    <section>
                        <FiAlignJustify size={30} onClick={() => setMenuIsVisible(true)} className="mobile" />
                    </section>

                </Header>
            </Container>

        </>
    )
}