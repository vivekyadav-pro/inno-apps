import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hamburger from '../components/Hamburger/Hamburger'
import Notification from '../components/Notification/Notification'
import NavItems from '../components/NavItems/NavItems'
import Home from '../components/Home/Home'
import Sessions from '../components/Sessions/Sessions'
import Videos from '../components/Videos/Videos'
import More from '../components/More/More'
import Announcements from '../components/Announcements/Announcement'
import Boxes from '../components/Announcements/Boxes/Boxes'

export class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/sessions" exact component={Sessions} />
                    <Route path="/videos" exact component={Videos} />
                    <Route path="/more" exact component={More} />
                    <Route path="/notifications" exact component={Announcements} />
                    <Route path="/announcements" exact component={Boxes} />
                </Switch>
                <Footer>
                    <NavItems />
                </Footer>

            </div>
        )
    }
}

export default Layout;
