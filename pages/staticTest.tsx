export default function StaticTest({ users }: any) {
  return (
    <>
      <div>
        {users.map((user: any) => {
          return <p key={user?.id}>{user?.name}</p>;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
