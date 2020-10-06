import React, { useEffect, useState } from "react";
import axios from "axios";
import FixedBars from "./fixedbars";

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
  const [lyrics, setLyrics] = useState("");
  const [lineCount, setLineCount] = useState(4);

  const fetchLyrics = async (query) => {
    const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${query}&page=1&page_size=10&country=us&f_has_lyrics=1&f_lyrics_language=en&apikey=${process.env.REACT_APP_MM_KEY}`;

    const res = await axios.get(url);
    const track_list = res.data.message.body.track_list;

    const random_track =
      track_list[Math.floor(Math.random() * Math.floor(track_list.length))];

    const track_lyrics = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${random_track.track.track_id}&apikey=${process.env.REACT_APP_MM_KEY}`
    );

    const api_lyrics = track_lyrics.data.message.body.lyrics.lyrics_body;

    setLyrics(api_lyrics);
    setLineCount(Math.floor(Math.random() * (7 - 3) + 3));
  };

  useEffect(() => {
    const query = wordList[Math.floor(Math.random() * wordList.length)];
    fetchLyrics(query);
  }, []);

  const lines = lyrics.split("\n").slice(0, lineCount);

  return (
    <div>
      {lines.map((x, index) => (
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
