import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
   const { user } = useContext(Context)
   const history = useHistory()


   const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
   }

   return (
      <Navbar bg="dark" variant="dark" >
         <Container>
            <NavLink style={{ color: 'grey' }} to={SHOP_ROUTE}>Купить девайс</NavLink>
            {user.isAuth ?
               <Nav>
                  {user.isAuth === "ADMIN" ?
                     <Button onClick={() => history.push(ADMIN_ROUTE)}
                        variant={"outline-light"}
                        className="ml-4">Админ панель</Button>
                     :
                     <div className="ml-4" style={{ color: "red" }}> Простой раб</div>
                  }

                  <Button onClick={() => logOut()}
                     style={{ marginLeft: 20, marginRight: 20 }}
                     variant={"outline-light"}
                  >
                     Выйти
                  </Button>
               </Nav>
               :
               <Nav >
                  <Button style={{ marginLeft: 21 }} variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
               </Nav>
            }
         </Container >
      </Navbar >
   )
})
export default NavBar