

const AddReview = () => {
    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-md">
        <h2 className="text-center text-2xl font-semibold text-gray-700">
          Give a Review...
        </h2>
        <p className="text-center text-sm text-gray-500 my-2">
          <span className="text-orange-500 font-bold">Sharing is Caring!!!</span>
        </p>
        <form >
          <div className="my-4">
            <p className="text-center text-gray-700 font-medium">Rate Us!</p>
            <div className="flex justify-center space-x-1 mt-2">
              
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="recipe" className="block text-gray-600 font-medium">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              id="recipe"
            
             
              className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Recipe you liked most"
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="suggestion"
              className="block text-gray-600 font-medium"
            >
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              id="suggestion"
              
              
              className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Suggestion"
            />
          </div>
          <div className="my-4">
            <label htmlFor="review" className="block text-gray-600 font-medium">
              Kindly express your care in a short way.
            </label>
            <textarea
              id="review"
             
              
              className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              rows="4"
              placeholder="Review in detail"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 mt-4 rounded-md hover:bg-orange-600 transition"
          >
            Send Review 🚀
          </button>
        </form>
      </div>
    );
};

export default AddReview;