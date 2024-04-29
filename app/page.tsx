"use client";
import { Card, PaddingContainer } from "@/components/common";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import NotFound from "@/assets/notfound.svg";
import {
  getDocs,
  collection,
  query,
  orderBy,
  getFirestore,
} from "firebase/firestore";
import { Suspense, useEffect, useState } from "react";
import { app } from "@/firebase"; // Make sure to import your Firebase configuration correctly

export default function Home() {
  const db = getFirestore(app);
  const postsRef = collection(db, "images");
  const [posts, setPosts] = useState([]);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const search = category !== null ? category : "all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsSnapshot = await getDocs(query(postsRef));
        const postsData: any = postsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [category]);

  console.log(posts);

  let filteredData = posts;
  if (search !== "all" || search === null)
    filteredData = posts.filter((item: any) => item.category === search);

  return (
    <main className="flex mt-[40px]">
      <Suspense fallback={<div>Loading...</div>}>
        <PaddingContainer>
          {filteredData.length > 0 ? (
            <section className="columns-2 md:columns-4 gap-[20px] w-full">
              {filteredData.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </section>
          ) : (
            <section className="flex w-full items-center justify-center flex-col h-[80vh] gap-[50px]">
              <Image
                src={NotFound}
                width={200}
                height={200}
                alt="Empty State"
                className="w-[150px] md:w-[200px]"
              />
              <h1 className="text-md md:text-2xl relative top-0 left-0 right-0 bottom-0 text-center">
                Belum ada photo nih dengan category <b>{category}</b>, <br />
                Ayoo uploud fotonya disini ehehe
              </h1>
            </section>
          )}
        </PaddingContainer>
      </Suspense>
    </main>
  );
}
