"use client";

import { UserProfile, SignOutButton } from "@clerk/nextjs";
import termsJson from "@/data/terms.json";
import { IconGavel, IconLogout } from "@tabler/icons-react";
import Link from "next/link";
const TermsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">Terms Page</h1>
      <p className="whitespace-pre-line">{termsJson.terms[0].content}</p>
    </div>
  );
};

const UserProfilePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <UserProfile path="/user-profile" routing="path">
        {/* You can pass the content as a component */}
        <UserProfile.Page label="Terms" labelIcon={<IconGavel />} url="terms">
          <TermsPage />
        </UserProfile.Page>
        <UserProfile.Page
          label="Sign Out"
          labelIcon={<IconLogout />}
          url="sign-out"
        >
          <div className=" flex items-center justify-center">
            <div
              className="bg-red-400 text-white text-xl text-shadow-md rounded-full  m-2 font-bold p-4 hover:bg-red-500 "
              //   onClick={() => signOut({ redirectUrl: "/" })}
            >
              <SignOutButton />
            </div>
          </div>
        </UserProfile.Page>

        {/* You can also pass the content as direct children */}
      </UserProfile>
    </div>
  );
};
export default UserProfilePage;
