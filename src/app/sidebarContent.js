import React, {Component} from 'react';
import  {Header} from './header';

export class SidebarContent extends Component {
  render() {
    return(
      <div>
        <div className="sidebar-content">
          <div>
            <h3>Structure</h3>
            <h5>Lesson</h5>
            <p>By ghdz89</p>
            <p>Learn how to setup a basic HTML document.</p>
          </div>
          <div>
            <ul>
              <li>what is HTML?</li>
              <li>!DOCTYPE</li>
              <li>Preparing HTML</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
