import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Search = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [imageErrors, setImageErrors] = useState({});
    const [containerState, setContainerState] = useState("close");
    const containerRef = useRef(null);

    const deleteSearch = () => {
        setSearchQuery("");
        setFilteredResults([]);
        setContainerState("close");
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query) {
            const results = data.filter((item) =>
                item.name.toLowerCase().includes(query)
            );
            setFilteredResults(results.slice(0, 3));
            setContainerState("open");
        } else {
            setFilteredResults([]);
            setContainerState("close");
        }
    };

    const handleImageError = (id) => {
        setImageErrors((prev) => ({ ...prev, [id]: true }));
    };

    const handleContainerState = () => {
        setContainerState("close");
    };

    const openContainerState = () => {
        setContainerState("open");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setContainerState("close");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="search">
            <img src="icons/search.svg" alt="search" />
            <input
                type="text"
                placeholder="Search for groceries, essentials and more ..."
                value={searchQuery}
                onChange={handleSearch}
                onFocus={openContainerState}
            />
            <button onClick={deleteSearch}>Delete</button>
            {filteredResults.length > 0 && (
                <div
                    className={`result-container ${containerState}`}
                    ref={containerRef}
                >
                    {filteredResults.map((item) => (
                        <Link
                            key={item.id}
                            className="result"
                            to={`/product/${item.id}`}
                            onClick={handleContainerState}
                        >
                            <div className="image-container">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onError={() => handleImageError(item.id)}
                                    className={imageErrors[item.id] ? "error-image" : ""}
                                />
                            </div>
                            <div className="info">
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
