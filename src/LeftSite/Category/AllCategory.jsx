import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="flex flex-col space-y-6 py-6 pl-10">
      {categories.map((category) => (
        <Link key={category.id} to={`/categoy/${category.id}`}>
          <h3 className="text-xl">{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default AllCategory;
