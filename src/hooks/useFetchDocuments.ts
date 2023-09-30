import { db } from "@/firebase/firebase";
import {
  DocumentData,
  WhereFilterOp,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";

const useFetchDocuments = (
  collectionName: string,
  arg: [string, WhereFilterOp, string]
) => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);

  const getDocuments = useCallback(async () => {
    const docQuery = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDocs(docQuery);
    let documentArry: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      documentArry = [...documentArry, doc.data];
    });

    setDocuments(documentArry);
  }, [arg[0], arg[1], arg[2], collectionName]);

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  return { documents };
};

export default useFetchDocuments;
