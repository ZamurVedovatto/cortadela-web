import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';
import { useEffect, useState } from "react";

export default function Results({ results }) {
    const [sortedResults, setSortedResults] =  useState(results)

    useEffect(() => {
        setSortedResults(shuffle(results))
    }, results)

    const shuffle = (array) => {
        var currentIndex = array.length,  randomIndex;
        while (0 !== currentIndex) {      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      }

    return (
        <>
            <FlipMove className="px-10 my-10 sm:grid md:grid-cols-4 xl:grid-cols-5 3xl:flex flex-wrap justify-center">
                
                {results.length > 0 ? (
                    results.map(result => (
                        <div key={result.id} className="bor">
        
                            <Thumbnail result={result} />
                        </div>
                    ))
                ) : (
                    <span>no results</span>
                )}
            </FlipMove>
        </>
    )
}
