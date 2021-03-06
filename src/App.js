import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import ChatContainer from "./components/Chat/ChatContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./Login/Login";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <div className='app-wrapper-content'>
                        <NavbarContainer/>
                            <Route path='/work'
                                   render={() => <ChatContainer/>}/>
                            <Route path='/flood'
                                   render={() => <ChatContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </div>

                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;