import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FixedBars from './fixedbars'

const test = `
So I've been doing a good job of makin' 'em think
I'm quite alright, better hope I don't blink
You see it's easy when I'm stomping on a beat
But no one sees me when I crawl back underneath
`;

const wordList = ['Drive', 'Roxanne', 'Hurt', 'Love', 'Life', 'Believe', 'Mood', 'Crazy'];

function Lines() {

    const [tracks, setTracks] = useState({})
    // const [lyrics, setLyrics] = useState('')

    useEffect(() => {
        const query = wordList[Math.floor(Math.random() * wordList.length)];

        // axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${query}&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        //       .then(res => {
        //           let track_list = res.data.message.body.track_list
        //           console.log('track_list ', track_list)
        //           setTracks(track_list)
        //       })
        //       .catch(err => console.log(err));
        let test_tracks = { query: query,
                            randomNum: Math.random() * 20,
                            list: '2'}
        setTracks(test_tracks)

        console.log('tracks : ', tracks);
    }, [])

    return (
        <div>
            { test.split('\n').map((x, index) => 
                <FixedBars line={Math.floor(Math.random() * 2) ? charToAst(x):x} key={index} />
          )}
        </div>
    )
}

export default Lines


const charToAst = (line) => {
    const words = line.split(' ');
    var hiddenLine = '';
  
    words.forEach(word => {
      hiddenLine += Math.floor(Math.random() * 2) ? "*".repeat(word.length):word;
      if(!words.length - 1) {
        hiddenLine += " ";
      }
    });
  
    return hiddenLine;
  }