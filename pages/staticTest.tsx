type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
};

export default function StaticTest({ users }: any) {
  console.table(users);
  return (
    <>
      <div>
        {users.map((user: UserType) => {
          return (
            <p key={user?.id}>
              {user?.name} + {user?.email}
            </p>
          );
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
