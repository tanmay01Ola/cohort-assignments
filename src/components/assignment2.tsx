
import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS : any = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
        // console.log("sentence = " , sentence)
    }
    ALL_WORDS.push(sentence);
    // console.log("ALL_WORDS=" , ALL_WORDS)
}

export function Assignment2() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    // console.log("sentence =" , sentences)
    ;
    console.log("re-rendered")
    const [filter, setFilter] = useState("");
    const sentence = useMemo(()=>{
        console.log("filtering...")
        return sentences.filter(x => x.includes(filter))
    },[filter , sentences])
    console.log(sentence)
    return <div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {sentence.map(word => <div>
            {word}    
        </div>)}
    </div>
}
