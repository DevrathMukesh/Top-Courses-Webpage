// App.js
import './App.css';
import { apiUrl, filterData } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(filterData[0].title);

  async function fetchData() {
    try {
      const result = await fetch(apiUrl);
      const output = await result.json();

      // Save data into state
      setCourses(output.data);
      // console.log("Fetched Data:", output.data); // Print fetched data to the console
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false); // Set loading to false when data fetching is complete
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Fetched Data:", courses); // Print fetched data to the console
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar />
      <div className="bg-bgDark2">
        <Filter filterData={filterData} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} selectedCategory={selectedCategory} />}
        </div>
      </div>
    </div>
  );
}

export default App;
