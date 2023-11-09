"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.js";

const TodoList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Category_table"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCategories(newData);
      console.log(typeof categories, newData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>{category.Category_name}</div>
      ))}
    </div>
  );
};

export default TodoList;
