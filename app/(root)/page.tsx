import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string}>}) {

  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 69,
      author: {_id: 1, name: "Vaibhav"},
      _id: 1,
      description: "This is a Description",
      image: "https://unsplash.com/photos/white-and-silver-round-container-n8YZ00cIcB8",
      category: "Technology",
      title: "AI Coffee",
    },
  ]
    
  return (
    <>
      <section className="pink_container">

      <h1 className="heading">Pitch your startup, <br />
      Connect with Entrepreneurs</h1>

      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Votes on Pitches, and Get Noticed in virtual Competitions.
      </p>

      <SearchForm query={query}/>
      </section>

      <section className="section-container">
          <p className="text-30-semibold">
              {query ? `Search results for "${query}"` : "All Startups"}
          </p>

          <ul className="mt-7 card_grid">
             {posts?.length > 0 ? (
              posts.map((post : StartupCardType) => (
                <StartupCard key={post?._id} post={post}/> 
              ))
            ) : (
              <p className="no-results"> No startups found!</p>
            )}
          </ul>
      </section>
    </>
  );
}
