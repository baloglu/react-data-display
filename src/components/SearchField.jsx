function SearchField({ searchTerm, handleSearch }) {
  const handleChange = (event) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <>
      <input
        name="search_field"
        className="search-field"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchField;
