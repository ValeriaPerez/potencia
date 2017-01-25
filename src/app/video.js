import React, {Component} from 'react';
import {SendMessage} from './modals/send-message';
import {Footer} from './footer';
import {Header} from './header';

export class Video extends Component {

	render() {
	 return (
      <div className="video">
        <Header />
        <button className="button btn-see" type="submit">Ver video</button>
        <button className="button btn-visit" type="submit">Agendar una visita</button>
        <iframe className="play-video" width="800" height="450" src="https://www.youtube.com/embed/IBH97ma9YiI" frameborder="0" allowfullscreen></iframe>
        <div className="arrow">
          <span className="scroll-inside"></span>
        </div>
        <Footer />
      </div>
    )
	}
}