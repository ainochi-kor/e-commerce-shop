"use client";
import { db } from "@/firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetchCollection = (collectionName: string) => {
  const [data, setData] = useState<Object[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = useCallback(() => {
    setIsLoading(true);
    try {
      const docRef = collection(db, collectionName);
      const docQuery = query(docRef, orderBy("createdAt", "desc"));

      onSnapshot(docQuery, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(allData);
      });
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [collectionName]);

  useEffect(() => {
    getCollection();
  }, [getCollection]);
  return { data, isLoading };
};

export default useFetchCollection;
