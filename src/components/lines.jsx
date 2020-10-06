import React, { useEffect, useState } from "react";
import axios from "axios";
import FixedBars from "./fixedbars";
import { queryHelpers } from "@testing-library/react";

const test = `
So I've been doing a good job of makin' 'em think
I'm quite alright, better hope I don't blink
You see it's easy when I'm stomping on a beat
But no one sees me when I crawl back underneath
`;

const wordList = [
  "Drive",
  "Roxanne",
  "Hurt",
  "Love",
  "Life",
  "Believe",
  "Mood",
  "Crazy",
];

function Lines() {
  const [tracks, setTracks] = useState({});
  const [lyrics, setLyrics] = useState("");

  const fetchLyrics = async (query) => {
    const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${query}&page=1&page_size=10&country=us&f_has_lyrics=1&f_lyrics_language=en&apikey=${process.env.REACT_APP_MM_KEY}`;

    const res = await axios.get(url);
    const track_list = res.data.message.body.track_list;

    const random_track = track_list[Math.floor(Math.random() * Math.floor(10))];

    const track_lyrics = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${random_track.track.track_id}&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    const api_lyrics = track_lyrics.data.message.body.lyrics.lyrics_body;

    setLyrics(api_lyrics);
  };

  useEffect(() => {
    const query = wordList[Math.floor(Math.random() * wordList.length)];
    fetchLyrics(query);
  }, []);

  return (
    <div>
      {lyrics.split("\n").map((x, index) => (
        <FixedBars
          line={Math.floor(Math.random() * 2) ? charToAst(x) : x}
          key={index}
        />
      ))}
    </div>
  );
}

export default Lines;

const charToAst = (line) => {
  const words = line.split(" ");
  var hiddenLine = "";

  words.forEach((word) => {
    hiddenLine += Math.floor(Math.random() * 2)
      ? "*".repeat(word.length)
      : word;
    if (!words.length - 1) {
      hiddenLine += " ";
    }
  });

  return hiddenLine;
};
