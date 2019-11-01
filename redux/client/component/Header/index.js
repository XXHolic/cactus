import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render () {
        return (
            <nav>
                <div>
                    <div>
                        <a>SSR</a>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/counter">计数器</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}