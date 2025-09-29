
const GPTMoviesSuggested = ({searchTerm}) => {
  return (
    <div className="min-h-screen bg-gray-900">
        <div>
        <h2 className="text-xl font-semibold mb-4">
          {searchTerm ? `Results for "${searchTerm}"` : "Suggested Movies"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {/* Example placeholders for movies */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 h-48 rounded-lg flex items-center justify-center"
            >
              Movie {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GPTMoviesSuggested
