/* eslint-disable react/jsx-no-undef */
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div>
      {
        session?.user && (
          <div>
            <h1 className="text-4xl text-center mt-10">Welcome {session?.user.name} </h1>
            <h1 className="text-4xl text-center mt-10">Email:  {session.user.email}</h1>

            <Image
              width={100}
              height={100}
              src={session.user?.image || ""}
              alt='ibrahim'
              className="rounded-full  max-auto "
            />
          </div>
        )
      }
    </div>
  );
};

export default DashboardPage;
