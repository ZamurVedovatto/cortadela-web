import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';

export default function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.length > 0 ? (
                results.map(result => (
                    <div key={result.id}>
    
                        <Thumbnail result={result} />
                    </div>
                ))
            ) : (
                <span>no results</span>
            )}
        </FlipMove>
    )
}
